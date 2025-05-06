let allData = []; // Stores data from the CSV
let selectedMetric = "SST (°C)"; // Default metric
// let selectedMetric = "pH Level"; // Default metric
const tooltip = d3.select("#tooltip"); // tooltip element for displaying information
let selectedYear = "All Years" // Track the year selected for filtering, default as al

// Event listener for the reset button
d3.select("#btn-all-bleaching").on("click", function() {
  selectedYear = "All Years";
  updateBleachingChart(); // refresh the bleaching chart
});

// Load and process the CSV data
d3.csv("data.csv").then(function(data) {
  // Transform the raw data - parse dates, convert numeric values
  allData = data.map(d => {
    return {
      Date: new Date(d.Date), // Convert string date to Date object
      Location: d.Location,
      // Convert string to number with + operator
      "SST (°C)": +d["SST (°C)"],
      "pH Level": +d["pH Level"],
      "Bleaching Severity": +d["Bleaching Severity"],
      "Species Observed": d["Species Observed"],
    };
  });

  // Initialize all charts with the loaded data
  updateCharts();
  updateBleachingChart();

  // Set up event listener for metric selection dropdown
  d3.select("#metric-select").on("change", function() {
    selectedMetric = this.value; // Update the selected metric
    updateCharts(); // Refresh charts with the new metric
  });
})

// Helper function to update all charts except the bleaching chart
function updateCharts() {
  updateYearsChart();
  updateBarChart();
}

// Function to create/update the time series chart showing metrics by year
function updateYearsChart() {
  // Clear any existing digram
  d3.select("#time-series-chart").html("");

  // Set up margins and dimensions for the svg
  const margin = { top: 20, right: 30, bottom: 50, left: 60 };
  const width = document.getElementById("time-series-chart").clientWidth - margin.left - margin.right;
  const height = 300 - margin.top - margin.bottom;

  // Create the svg element and a group within it, applying the margins
  const svg = d3.select("#time-series-chart")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", `translate(${margin.left},${margin.top})`);

  // Group data by year and calculate the mean value of the selected metric for each year
  const dataByYear = Array.from(d3.group(allData, d => d.Date.getFullYear()),
    ([year, values]) => {
      return {
        year: year,
        value: d3.mean(values, d => d[selectedMetric])
      };
    }
  ).sort((a, b) => a.year - b.year);

  // Set up the x-scale for years
  const x = d3.scaleLinear()
    .domain(d3.extent(dataByYear, d => d.year)) // Use the min and max years
    .range([0, width]);

  // Set up the y-scale with different domains based on the selected metric
  const y = d3.scaleLinear()
  if (selectedMetric == "pH Level") {
    y.domain([7.95, 8.1]) // Custom domain for pH levels
  }
  else {
    y.domain([25, 30]); // Custom domain for SST (temperature)
  }
  y.range([height, 0]);

  // Add x-axis with year formatting
  svg.append("g")
    .attr("transform", `translate(0,${height})`)
    .call(d3.axisBottom(x).tickFormat(d3.format("d"))); // displays years as integers

  // Add y-axis
  svg.append("g")
    .call(d3.axisLeft(y));

  // Add x-axis label
  svg.append("text")
    .attr("text-anchor", "middle")
    .attr("x", width / 2)
    .attr("y", height + margin.bottom - 10)
    .text("Year");

  // Add y-axis label with the currently selected metric
  svg.append("text")
    .attr("text-anchor", "middle")
    .attr("transform", "rotate(-90)")
    .attr("x", -height / 2)
    .attr("y", -margin.left + 15)
    .text(selectedMetric);

  // Draw the line connecting data points
  svg.append("path")
    .datum(dataByYear)
    .attr("fill", "none")
    .attr("stroke", "black")
    .attr("stroke-width", 2)
    .attr("d", d3.line()
      .x(d => x(d.year))
      .y(d => y(d.value))
    );

  // Add data points (circles) with interactive features
  svg.selectAll(".dot")
    .data(dataByYear)
    .enter().append("circle")
    .attr("class", "dot")
    .attr("cx", d => x(d.year))
    .attr("cy", d => y(d.value))
    .attr("r", 5)
    .attr("fill", "cadetblue")
    // Show tooltip on hover
    .on("mouseover", function(event, d) {
      tooltip.transition()
        .duration(200)
        .style("opacity", 0.9);

      let displayValue = d.value;
      if (typeof displayValue === 'number' && displayValue % 1 !== 0) {
        displayValue = displayValue.toFixed(2);
      }

      tooltip.html(`Year: ${d.year}<br/>${selectedMetric}: ${displayValue}<br/>Click for detailed marine analysis.`)
        .style("left", (event.pageX + 10) + "px")
        .style("top", (event.pageY - 28) + "px");
    })
    // Update selected year and refresh bleaching chart when a year is clicked
    .on("click", function(event, d) {
      selectedYear = `${d.year}`;
      updateBleachingChart();
    })
    // Hide tooltip when not hovering
    .on("mouseout", function() {
      tooltip.transition()
        .duration(500)
        .style("opacity", 0);
    });
}

// Function to create/update the bleaching severity chart
function updateBleachingChart() {
  // Clear any existing chart
  d3.select("#bleaching-species-chart").html("");

  // Filter data based on selected year, or use all data if "All Years" is selected
  let BleachingLevelsByYear;
  if (selectedYear == "All Years") {
    BleachingLevelsByYear = allData;
  }
  else {
    BleachingLevelsByYear = allData.filter(d => d.Date.getFullYear() === +selectedYear);
  }

  // Define bleaching severity levels (0-3) and aggregate data for each level
  const bleachingLevels = [0, 1, 2, 3];
  const bleachingData = bleachingLevels.map(level => {
    // Filter data for this bleaching level
    const dataForLevel = BleachingLevelsByYear.filter(d => d["Bleaching Severity"] === level);
    // Count species at this bleaching level
    const speciesCount = new Set(dataForLevel.map(d => d["Species Observed"])).size;

    return {
      bleaching: level,
      count: speciesCount,
      metric: d3.mean(dataForLevel, d => d[selectedMetric]) // Also calculate mean of selected metric
    };
  });

  // Set up margins and dimensions for the svg
  const margin = { top: 20, right: 30, bottom: 50, left: 60 };
  const width = document.getElementById("bleaching-species-chart").clientWidth - margin.left - margin.right;
  const height = 300 - margin.top - margin.bottom;

  // Create the svg element and a group within it, applying the margins
  const svg = d3.select("#bleaching-species-chart")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  // Set up the x-scale for bleaching severity levels (0-3)
  const x = d3.scaleLinear()
    .domain([0, 3])
    .range([0, width]);

  // Calculate min and max values for the y-scale with padding
  const yMin = Math.min(...bleachingData.map(d => d.count));
  const yMax = Math.max(...bleachingData.map(d => d.count));

  // Set up the y-scale for species counts
  const y = d3.scaleLinear()
    .domain([yMin-10, yMax+10]) // Add padding to y-scale
    .range([height, 0]);

  // Add x-axis with ticks only at integer positions
  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x)
      .ticks(10)
      .tickFormat(d => Number.isInteger(d) ? d : "") // Only show integer ticks
    );

  // Add y-axis
  svg.append("g")
    .call(d3.axisLeft(y));

  // Add x-axis label
  svg.append("text")
    .attr("text-anchor", "middle")
    .attr("x", width / 2)
    .attr("y", height + margin.bottom - 10)
    .text("Bleaching Severity");

  // Add y-axis label
  svg.append("text")
    .attr("text-anchor", "middle")
    .attr("transform", "rotate(-90)")
    .attr("x", -height / 2)
    .attr("y", -margin.left + 15)
    .text("Species Observed");

  // Draw the line connecting data points
  svg.append("path")
    .datum(bleachingData)
    .attr("fill", "none")
    .attr("stroke", "#e74c3c") // Red color for bleaching data
    .attr("stroke-width", 2)
    .attr("d", d3.line()
      .x(d => x(d.bleaching))
      .y(d => y(d.count))
    );

  // Add data points (circles) with interactive features
  svg.selectAll(".dot")
    .data(bleachingData)
    .enter().append("circle")
    .attr("class", "dot")
    .attr("cx", d => x(d.bleaching))
    .attr("cy", d => y(d.count))
    .attr("r", 5)
    .attr("fill", "#e74c3c")
    // Show tooltip on hover with detailed information
    .on("mouseover", function(event, d) {
      tooltip.transition()
        .duration(200)
        .style("opacity", 0.9);

      let metricValue = d.metric;
      if (typeof metricValue === 'number' && metricValue % 1 !== 0) {
        metricValue = metricValue.toFixed(2);
      }

      tooltip.html(`Bleaching Level: ${d.bleaching}<br/>Species Count: ${d.count}<br/>${selectedMetric}: ${metricValue}`)
        .style("left", (event.pageX + 10) + "px")
        .style("top", (event.pageY - 28) + "px");
    })
    // Hide tooltip when not hovering
    .on("mouseout", function() {
      tooltip.transition()
        .duration(500)
        .style("opacity", 0);
    });
}

// Function to create/update the bar chart showing metrics by location
function updateBarChart() {
  // Clear any existing chart
  d3.select("#location-bar-chart").html("");

  // Group data by location and calculate the mean value of the selected metric for each location
  const locationData = Array.from(d3.group(allData, d => d.Location),
    ([location, values]) => {
      return {
        location: location,
        value: d3.mean(values, d => d[selectedMetric]),
        count: values.length // Track the number of samples for each location
      };
    }
  ).sort((a, b) => b.value - a.value);
  // Set up margins and dimensions for the svg
  const margin = { top: 20, right: 30, bottom: 70, left: 60 };
  const width = document.getElementById("location-bar-chart").clientWidth - margin.left - margin.right;
  const height = 300 - margin.top - margin.bottom;

  // Create the svg element and a group within it, applying the margins
  const svg = d3.select("#location-bar-chart")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  // Set up the x-scale as a band scale for categorical data (locations)
  const x = d3.scaleBand()
    .domain(locationData.map(d => d.location))
    .range([0, width])
    .padding(0.2); // Add spacing between bars

  // Set up the y-scale with different domains based on the selected metric
  const y = d3.scaleLinear()
  if (selectedMetric == "pH Level") {
    y.domain([8.03, 8.06]); // Custom domain for pH levels
  }
  else {
    y.domain([28, 29]); // Default domain for SST (temperature)
  }
  y.range([height, 0]);
  y.nice()

  // Add x-axis with rotated labels for better readability
  svg.append("g")
    .attr("transform", `translate(0,${height})`)
    .call(d3.axisBottom(x))
    .selectAll("text")
    .attr("transform", "rotate(-30)")
    .attr("font-size", "small")
    .style("text-anchor", "end");

  // Add y-axis
  svg.append("g")
    .call(d3.axisLeft(y));

  // Add y-axis label with the currently selected metric
  svg.append("text")
    .attr("text-anchor", "middle")
    .attr("transform", "rotate(-90)")
    .attr("x", -height / 2)
    .attr("y", -margin.left + 15)
    .text(selectedMetric);

  // Define colors for the bars
  const colors = ["lightcoral", "lightblue", "lightgreen", "lightsalmon", "lightpink", "lightseagreen", "violet"];

  // Add bars for each location with interactive features
  svg.selectAll(".bar")
    .data(locationData)
    .enter().append("rect")
    .attr("class", "bar")
    .attr("x", d => x(d.location))
    .attr("y", d => y(d.value))
    .attr("width", x.bandwidth())
    .attr("height", d => height - y(d.value))
    .attr("fill", (d, i) => colors[i % colors.length]) // Cycle through colors
    // Show tooltip on hover with detailed information
    .on("mouseover", function(event, d) {
      tooltip.transition()
        .duration(200)
        .style("opacity", 0.9);

      // Format decimal values for display
      let displayValue = d.value;
      if (typeof displayValue === 'number' && displayValue % 1 !== 0) {
        displayValue = displayValue.toFixed(2);
      }

      // Populate and position the tooltip
      tooltip.html(`Location: ${d.location}<br/>${selectedMetric}: ${displayValue}<br/>Samples: ${d.count}`)
        .style("left", (event.pageX + 10) + "px")
        .style("top", (event.pageY - 28) + "px");
    })
    // Show additional information when clicked (placeholder for more details)
    .on("click", function(event, d) {
      tooltip.transition()
        .duration(200)
        .style("opacity", 0.9);

      tooltip.html("More data here such as species observed and ")
        .style("left", (event.pageX + 10) + "px")
        .style("top", (event.pageY - 28) + "px");
    })
    // Hide tooltip when not hovering
    .on("mouseout", function() {
      tooltip.transition()
        .duration(500)
        .style("opacity", 0);
    });
}