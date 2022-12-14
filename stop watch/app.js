var min = 0
var sec = 0
var msec = 0
var a = document.getElementById('msec') 
var b = document.getElementById('sec') 
var c = document.getElementById('min') 
var interval;

function start(){
interval = setInterval(function(){
    msec++
    a.innerHTML = msec
if(msec >= 100){
    sec++
    b.innerHTML=sec
    msec = 0
}
else if (sec >=60){
    min++
    c.innerHTML=min
    sec = 0
}
},10)
document.getElementById('hhh').disabled = true
}

function stop(){
    clearInterval(interval)
    document.getElementById('hhh').disabled = false
}


function finish(){
    min = 0
    sec = 0
    msec =0
    a.innerHTML = min
    b.innerHTML = sec
    c.innerHTML = msec

}
// function re (){

// }

function my(){
    document.write("<h3><strong>NAME :</strong>&nbsp&nbsp&nbsp&nbsp <u><em>Aisha Muhammad Ghulam</em></u></h3>")
    document.write("<h3><strong>ROLL NO :</strong>&nbsp&nbsp&nbsp&nbsp<u> <em>WAC-72495&nbsp&nbsp&nbsp&nbsp (WEB & APP COURSE &nbsp &nbsp&nbsp BATCH:&nbsp&nbsp1&nbsp)</em></u></h3>")
    document.write("<h3><strong>ASSIGNMENT:</strong>&nbsp&nbsp&nbsp&nbsp <u><em>MARKSHEET OF STUDENT</em></u></h3>")
     
}