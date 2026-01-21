
    var box1 = document.getElementById("box1");
    var box2 = document.getElementById("box2");
    var box3 = document.getElementById("box3");
    var box4 = document.getElementById("box4");
    var box5 = document.getElementById("box5");
    var box6 = document.getElementById("box6");
    var box7 = document.getElementById("box7");
    var box8 = document.getElementById("box8");
    var box9 = document.getElementById("box9");
    var box10 = document.getElementById("box10");
    var box11 = document.getElementById("box11");
    var box12 = document.getElementById("box12");
    var box13 = document.getElementById("box13");
    var box14 = document.getElementById("box14");
    var box15 = document.getElementById("box15");
    var box16 = document.getElementById("box16");
    var box17 = document.getElementById("box17");
    var box18 = document.getElementById("box18");
    var box19 = document.getElementById("box19");
    var box20 = document.getElementById("box20");
    var box21 = document.getElementById("box21");
    var box22 = document.getElementById("box22");
    var box23 = document.getElementById("box23");
    var box24 = document.getElementById("box24");
    var box25 = document.getElementById("box25");

    var solutions = [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14 , 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]]

function addListeners(){
    box1.addEventListener('click',handleChange1,{once:true});
    box2.addEventListener('click',handleChange2,{once:true});
    box3.addEventListener('click',handleChange3,{once:true});
    box4.addEventListener('click',handleChange4,{once:true});
    box5.addEventListener('click',handleChange5,{once:true});
    box6.addEventListener('click',handleChange6,{once:true});
    box7.addEventListener('click',handleChange7,{once:true});
    box8.addEventListener('click',handleChange8,{once:true});
    box9.addEventListener('click',handleChange9,{once:true});
    box10.addEventListener('click',handleChange10,{once:true});
    box11.addEventListener('click',handleChange11,{once:true});
    box12.addEventListener('click',handleChange12,{once:true});
    box14.addEventListener('click',handleChange14,{once:true});
    box15.addEventListener('click',handleChange15,{once:true});
    box16.addEventListener('click',handleChange16,{once:true});
    box17.addEventListener('click',handleChange17,{once:true});
    box18.addEventListener('click',handleChange18,{once:true});
    box19.addEventListener('click',handleChange19,{once:true});
    box20.addEventListener('click',handleChange20,{once:true});
    box21.addEventListener('click',handleChange21,{once:true});
    box22.addEventListener('click',handleChange22,{once:true});
    box23.addEventListener('click',handleChange23,{once:true});
    box24.addEventListener('click',handleChange24,{once:true});
    box25.addEventListener('click',handleChange25,{once:true});
}

function removeListeners(){
    box1.removeEventListener('click',handleChange1,{once:true});
    box2.removeEventListener('click',handleChange2,{once:true});
    box3.removeEventListener('click',handleChange3,{once:true});
    box4.removeEventListener('click',handleChange4,{once:true});
    box5.removeEventListener('click',handleChange5,{once:true});
    box6.removeEventListener('click',handleChange6,{once:true});
    box7.removeEventListener('click',handleChange7,{once:true});
    box8.removeEventListener('click',handleChange8,{once:true});
    box9.removeEventListener('click',handleChange9,{once:true});
    box10.removeEventListener('click',handleChange10,{once:true});
    box11.removeEventListener('click',handleChange11,{once:true});
    box12.removeEventListener('click',handleChange12,{once:true});
    box14.removeEventListener('click',handleChange14,{once:true});
    box15.removeEventListener('click',handleChange15,{once:true});
    box16.removeEventListener('click',handleChange16,{once:true});
    box17.removeEventListener('click',handleChange17,{once:true});
    box18.removeEventListener('click',handleChange18,{once:true});
    box19.removeEventListener('click',handleChange19,{once:true});
    box20.removeEventListener('click',handleChange20,{once:true});
    box21.removeEventListener('click',handleChange21,{once:true});
    box22.removeEventListener('click',handleChange22,{once:true});
    box23.removeEventListener('click',handleChange23,{once:true});
    box24.removeEventListener('click',handleChange24,{once:true});
    box25.removeEventListener('click',handleChange25,{once:true});
}


var form = document.getElementById("form");
var name = ""
var category = ""
var boxid = ""
var listofboxes = []
var qtxt = document.getElementById("questiontxt")
var container = document.getElementById("container")

function handleChange1(){
    box1.style.backgroundColor = "#89abe3";
    form.style.display = "block"
    category = box1.textContent
    qtxt.textContent = category
    container.style.filter = "blur(10px)"
    boxid = "box1"
    removeListeners()
}
function handleChange1(){
    box1.style.backgroundColor = "#89abe3";
    form.style.display = "block"
    category = box1.textContent
    qtxt.textContent = category
    container.style.filter = "blur(10px)"
    boxid = "box1"
    removeListeners()
    }
function handleChange2(){
    box2.style.backgroundColor = "#89abe3";
    form.style.display = "block"
    category = box2.textContent
    qtxt.textContent = category
    container.style.filter = "blur(10px)"
    boxid = "box2"
    removeListeners()
    }
function handleChange3(){
    box3.style.backgroundColor = "#89abe3";
    form.style.display = "block"
    category = box3.textContent
    qtxt.textContent = category
    container.style.filter = "blur(10px)"
    boxid = "box3"
    removeListeners()
    }
function handleChange4(){
    box4.style.backgroundColor = "#89abe3";
    form.style.display = "block"
    category = box4.textContent
    qtxt.textContent = category
    container.style.filter = "blur(10px)"
    boxid = "box4"
    removeListeners()
    }
function handleChange5(){
    box5.style.backgroundColor = "#89abe3";
    form.style.display = "block"
    category = box5.textContent
    qtxt.textContent = category
    container.style.filter = "blur(10px)"
    boxid = "box5"
    removeListeners()
    }
function handleChange6(){
    box6.style.backgroundColor = "#89abe3";
    form.style.display = "block"
    category = box6.textContent
    qtxt.textContent = category
    container.style.filter = "blur(10px)"
    boxid = "box6"
    removeListeners()
    }
function handleChange7(){
    box7.style.backgroundColor = "#89abe3";
    form.style.display = "block"
    category = box7.textContent
    qtxt.textContent = category
    container.style.filter = "blur(10px)"
    boxid = "box7"
    removeListeners()
    }
function handleChange8(){
    box8.style.backgroundColor = "#89abe3";
    form.style.display = "block"
    category = box8.textContent
    qtxt.textContent = category
    container.style.filter = "blur(10px)"
    boxid = "box8"
    removeListeners()
    }
function handleChange9(){
    box9.style.backgroundColor = "#89abe3";
    form.style.display = "block"
    category = box9.textContent
    qtxt.textContent = category
    container.style.filter = "blur(10px)"
    boxid = "box9"
    removeListeners()
    }
function handleChange10(){
    box10.style.backgroundColor = "#89abe3";
    form.style.display = "block"
    category = box10.textContent
    qtxt.textContent = category
    container.style.filter = "blur(10px)"
    boxid = "box10"
    removeListeners()
    }
function handleChange11(){
    box11.style.backgroundColor = "#89abe3";
    form.style.display = "block"
    category = box11.textContent
    qtxt.textContent = category
    container.style.filter = "blur(10px)"
    boxid = "box11"
    removeListeners()
    }
function handleChange12(){
    box12.style.backgroundColor = "#89abe3";
    form.style.display = "block"
    category = box12.textContent
    qtxt.textContent = category
    container.style.filter = "blur(10px)"
    boxid = "box12"
    removeListeners()
    }

function handleChange14(){
    box14.style.backgroundColor = "#89abe3";
    form.style.display = "block"
    category = box14.textContent
    qtxt.textContent = category
    container.style.filter = "blur(10px)"
    boxid = "box14"
    removeListeners()
    }
function handleChange15(){
    box15.style.backgroundColor = "#89abe3";
    form.style.display = "block"
    category = box15.textContent
    qtxt.textContent = category
    container.style.filter = "blur(10px)"
    boxid = "box15"
    removeListeners()
    }
function handleChange16(){
    box16.style.backgroundColor = "#89abe3";
    form.style.display = "block"
    category = box16.textContent
    qtxt.textContent = category
    container.style.filter = "blur(10px)"
    boxid = "box16"
    removeListeners()
    }
function handleChange17(){
    box17.style.backgroundColor = "#89abe3";
    form.style.display = "block"
    category = box17.textContent
    qtxt.textContent = category
    container.style.filter = "blur(10px)"
    boxid = "box17"
    removeListeners()
    }
function handleChange18(){
    box18.style.backgroundColor = "#89abe3";
    form.style.display = "block"
    category = box18.textContent
    qtxt.textContent = category
    container.style.filter = "blur(10px)"
    boxid = "box18"
    removeListeners()
    }
function handleChange19(){
    box19.style.backgroundColor = "#89abe3";
    form.style.display = "block"
    category = box19.textContent
    qtxt.textContent = category
    container.style.filter = "blur(10px)"
    boxid = "box19"
    removeListeners()
    }
function handleChange20(){
    box20.style.backgroundColor = "#89abe3";
    form.style.display = "block"
    category = box20.textContent
    qtxt.textContent = category
    container.style.filter = "blur(10px)"
    boxid = "box20"
    removeListeners()
    }
function handleChange21(){
    box21.style.backgroundColor = "#89abe3";
    form.style.display = "block"
    category = box21.textContent
    qtxt.textContent = category
    container.style.filter = "blur(10px)"
    boxid = "box21"
    removeListeners()
    }
function handleChange22(){
    box22.style.backgroundColor = "#89abe3";
    form.style.display = "block"
    category = box22.textContent
    qtxt.textContent = category
    container.style.filter = "blur(10px)"
    boxid = "box22"
    removeListeners()
    }
function handleChange23(){
    box23.style.backgroundColor = "#89abe3";
    form.style.display = "block"
    category = box23.textContent
    qtxt.textContent = category
    container.style.filter = "blur(10px)"
    boxid = "box23"
    removeListeners()
    }
function handleChange24(){
    box24.style.backgroundColor = "#89abe3";
    form.style.display = "block"
    category = box24.textContent
    qtxt.textContent = category
    container.style.filter = "blur(10px)"
    boxid = "box24"
    removeListeners()
    }
function handleChange25(){
    box25.style.backgroundColor = "#89abe3";
    form.style.display = "block"
    category = box25.textContent
    qtxt.textContent = category
    container.style.filter = "blur(10px)"
    boxid = "box25"
    removeListeners()
    }


function addtoList(){
    if(document.getElementById("name").value.trim() != ""){
        name = category + " -> "+document.getElementById("name").value
        newP = document.createElement('p');
        newP.style.color = "#f8f9fc"
        newP.textContent = name
        newP.style.marginTop = "0"
        newP.style.marginBottom = "0"
        document.getElementById("print").appendChild(newP)
        listofboxes.push(boxid)
        container.style.filter = "blur(0px)"
        form.style.display = "none"
        document.getElementById("name").value = ""
        category = ""
        boxid = ""
        addListeners()
        solutionCheck()
    }
    else{
        alert("Please fill out the students name")
    }
}

function goBack(){
    document.getElementById(boxid).style.backgroundColor = "#f8f9fc";
    form.style.display = "none"
    container.style.filter = "blur(0px)"
    document.getElementById("name").value = ""
    category = ""
    boxid = ""
    addListeners()
}

function solutionCheck(){
    var boxname = ""
    for(let i = 0; i < solutions.length; i++){
        var lap = true
        for(let j = 0; j < solutions[i].length; j++){
            boxname = "box"+solutions[i][j]
            if(listofboxes.includes(boxname)){
                lap = lap && true
            }
            else{
                lap = lap && false
            }
        }
        if(lap == true){
            document.getElementById("container").style.display = "none"
            document.getElementById("finish").style.display = "block"
            document.getElementById("print").style.display = "block"
        }
    }
}


addListeners()
document.getElementById("finish").style.display = "none"
document.getElementById("print").style.display = "none"