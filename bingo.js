
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
    box13.addEventListener('click',handleChange13,{once:true});
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
    box13.removeEventListener('click',handleChange13,{once:true});
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

function handleChange1(){
    if(box1.style.backgroundColor != "red"){
        box1.style.backgroundColor = "red";
        form.style.display = "block"
        category = box1.textContent
        boxid = "box1"
        removeListeners()
    }
}
function handleChange2(){
    if(box2.style.backgroundColor != "red"){
        box2.style.backgroundColor = "red";
        form.style.display = "block"
        category = box2.textContent
        boxid = "box2"
        removeListeners()
    }
}
function handleChange3(){
    if(box3.style.backgroundColor != "red"){
        box3.style.backgroundColor = "red";
        form.style.display = "block"
        category = box3.textContent
        boxid = "box3"
        removeListeners()
    }
}
function handleChange4(){
    if(box4.style.backgroundColor != "red"){
        box4.style.backgroundColor = "red";
        form.style.display = "block"
        category = box4.textContent
        boxid = "box4"
        removeListeners()
    }
}
function handleChange5(){
    if(box5.style.backgroundColor != "red"){
        box5.style.backgroundColor = "red";
        form.style.display = "block"
        category = box5.textContent
        boxid = "box5"
        removeListeners()
    }
}
function handleChange6(){
    if(box6.style.backgroundColor != "red"){
        box6.style.backgroundColor = "red";
        form.style.display = "block"
        category = box6.textContent
        boxid = "box6"
        removeListeners()
    }
}
function handleChange7(){
    if(box7.style.backgroundColor != "red"){
        box7.style.backgroundColor = "red";
        form.style.display = "block"
        category = box7.textContent
        boxid = "box7"
        removeListeners()
    }
}
function handleChange8(){
    if(box8.style.backgroundColor != "red"){
        box8.style.backgroundColor = "red";
        form.style.display = "block"
        category = box8.textContent
        boxid = "box8"
        removeListeners()
    }
}
function handleChange9(){
    if(box9.style.backgroundColor != "red"){
        box9.style.backgroundColor = "red";
        form.style.display = "block"
        category = box9.textContent
        boxid = "box9"
        removeListeners()
    }
}
function handleChange10(){
    if(box10.style.backgroundColor != "red"){
        box10.style.backgroundColor = "red";
        form.style.display = "block"
        category = box10.textContent
        boxid = "box10"
        removeListeners()
    }
}
function handleChange11(){
    if(box11.style.backgroundColor != "red"){
        box11.style.backgroundColor = "red";
        form.style.display = "block"
        category = box11.textContent
        boxid = "box11"
        removeListeners()
    }
}
function handleChange12(){
    if(box12.style.backgroundColor != "red"){
        box12.style.backgroundColor = "red";
        form.style.display = "block"
        category = box12.textContent
        boxid = "box12"
        removeListeners()
    }
}
function handleChange13(){
    if(box13.style.backgroundColor != "red"){
        box13.style.backgroundColor = "red";
        form.style.display = "block"
        category = box13.textContent
        boxid = "box13"
        removeListeners()
    }
}
function handleChange14(){
    if(box14.style.backgroundColor != "red"){
        box14.style.backgroundColor = "red";
        form.style.display = "block"
        category = box14.textContent
        boxid = "box14"
        removeListeners()
    }
}
function handleChange15(){
    if(box15.style.backgroundColor != "red"){
        box15.style.backgroundColor = "red";
        form.style.display = "block"
        category = box15.textContent
        boxid = "box15"
        removeListeners()
    }
}
function handleChange16(){
    if(box16.style.backgroundColor != "red"){
        box16.style.backgroundColor = "red";
        form.style.display = "block"
        category = box16.textContent
        boxid = "box16"
        removeListeners()
    }
}
function handleChange17(){
    if(box17.style.backgroundColor != "red"){
        box17.style.backgroundColor = "red";
        form.style.display = "block"
        category = box17.textContent
        boxid = "box17"
        removeListeners()
    }
}
function handleChange18(){
    if(box18.style.backgroundColor != "red"){
        box18.style.backgroundColor = "red";
        form.style.display = "block"
        category = box18.textContent
        boxid = "box18"
        removeListeners()
    }
}
function handleChange19(){
    if(box19.style.backgroundColor != "red"){
        box19.style.backgroundColor = "red";
        form.style.display = "block"
        category = box19.textContent
        boxid = "box19"
        removeListeners()
    }
}
function handleChange20(){
    if(box20.style.backgroundColor != "red"){
        box20.style.backgroundColor = "red";
        form.style.display = "block"
        category = box20.textContent
        boxid = "box20"
        removeListeners()
    }
}
function handleChange21(){
    if(box21.style.backgroundColor != "red"){
        box21.style.backgroundColor = "red";
        form.style.display = "block"
        category = box21.textContent
        boxid = "box21"
        removeListeners()
    }
}
function handleChange22(){
    if(box22.style.backgroundColor != "red"){
        box22.style.backgroundColor = "red";
        form.style.display = "block"
        category = box22.textContent
        boxid = "box22"
        removeListeners()
    }
}
function handleChange23(){
    if(box23.style.backgroundColor != "red"){
        box23.style.backgroundColor = "red";
        form.style.display = "block"
        category = box23.textContent
        boxid = "box23"
        removeListeners()
    }
}
function handleChange24(){
    if(box24.style.backgroundColor != "red"){
        box24.style.backgroundColor = "red";
        form.style.display = "block"
        category = box24.textContent
        boxid = "box24"
        removeListeners()
    }
}
function handleChange25(){
    if(box25.style.backgroundColor != "red"){
        box25.style.backgroundColor = "red";
        form.style.display = "block"
        category = box25.textContent
        boxid = "box25"
        removeListeners()
    }
}

function addtoList(){
    if(document.getElementById("name").value.trim() != ""){
        name += document.getElementById("name").value+ " = "+category + "\n || "
        document.getElementById("print").textContent = name
        listofboxes.push(boxid)
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
    document.getElementById(boxid).style.backgroundColor = "gray";
    form.style.display = "none"
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