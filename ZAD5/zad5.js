const form1=document.getElementById("form1");
const form2=document.getElementById("form2");
const timer=document.getElementById("time");
const pomodoro=document.getElementById("pomodoro");
const short=document.getElementById("short");
const long=document.getElementById("long");
const start=document.getElementById("start");
const stop=document.getElementById("stop");
const reset=document.getElementById("reset");
const footer=document.getElementsByClassName("footer")[0];
let pause;
let resetC;
let minStr;
let secStr;
pomodoro.addEventListener("click",pomodoroFunction);
function pomodoroFunction(){
    start.style.visibility="visible";
    stop.style.visibility="visible";
    reset.style.visibility="visible";
}
//brojac funckija koju posle koristim za sve
function counter(d){
    short.disabled=true;
    long.disabled=true;
    start.disabled=true;
    var distance = d;
    var x = setInterval(function() {
        let minutes = Math.floor(distance /60);
        let seconds = distance % 60;
        minStr=(Math.floor(minutes/10)).toString()+(minutes%10).toString();
        secStr=(Math.floor(seconds/10)).toString()+(seconds%10).toString();
        timer.innerHTML=minStr+":"+secStr;
        document.title="Pomodoro Clock ("+minStr+":"+secStr+")";
        distance--;
        if (distance < 0) {
            short.disabled=false;
            long.disabled=false;
            start.disabled=false;
            distance=d;
            clearInterval(x);
        }
        else if(pause){
            pause=false;
            short.disabled=false;
            long.disabled=false;
            start.disabled=false;
            timer.innerHTML=minStr+":"+secStr;
            clearInterval(x);
        }
        else if(resetC){
            resetC=false;
            clearInterval(x);
            counter(1500);
            
        }
    }, 1000);
}
start.addEventListener("click",startClock);
function startClock(e){
    counter(1500);
}
short.addEventListener("click",shortBreakClock);
function shortBreakClock(e){
    counter(300);
}
long.addEventListener("click",longBreakClock);
function longBreakClock(e){
    counter(600);
}
stop.addEventListener("click",stopClock);
function stopClock(){
    pause=true;
}
reset.addEventListener("click",resetClock);
function resetClock(){
    resetC=true;
}