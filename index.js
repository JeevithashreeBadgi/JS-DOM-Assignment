const element=document.getElementById("text");
console.log(element);

const element1=document.getElementsByTagName("h1");
console.log(element1);

const element2=document.getElementsByClassName("box");
console.log(element2);

const element3=document.getElementsByTagName("h1");
console.log(element3);
element3[1].innerText="Hello World";
console.log(element3);

function changeDirection(){
const element4=document.getElementsByClassName("flex-container");
element4[0].style.flexDirection="column";
console.log(element4);
}

const element5=document.getElementsByTagName("h1");
console.log(element5);
element5[2].style.color="red";
element5[2].id="heading";
// element5[2].setAttribute("id","heading");
console.log(element5);

function changeContent(){
const element6=document.getElementsByTagName("h1");
element6[3].innerText="Welcome To Elevation Academy";
console.log(element6);
}



function time(){
    var hours=document.getElementById("hours");
    var minutes=document.getElementById("minutes");
    var seconds=document.getElementById("seconds");
    var ampm=document.getElementById("ampm");


    var time=new Date();

    var hrs=time.getHours();
    var mins=time.getMinutes();
    var secs=time.getSeconds();
    var am_pm ="PM";

    if(hrs==0){
        hrs=12;
    }
    if(hrs>12){
        hrs=hrs-12;
        am_pm="PM"
    }//24 hrs format into 12 hrs format
    
    if(hrs<10){
        hrs="0"+hrs;
    }
    if(mins<10){
        mins="0"+mins;
    }
    if(secs<10){
        secs="0"+secs;
    }

    hours.innerText=hrs;
    minutes.innerText=mins;
    seconds.innerText=secs;
    ampm.innerText=am_pm;

    }
    
    var oneseconds = 1000;
    setInterval(time,oneseconds)
time();

