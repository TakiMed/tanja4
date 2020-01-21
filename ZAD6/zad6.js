board=document.getElementById("board");
Ckey=document.getElementById("Ckey");
show=document.getElementById("res");
let str="";
let first=true;
let result;

board.addEventListener("click",mouseCalculator);
function mouseCalculator(e){
    if(event.target.classList.contains("field")){
        str+= event.target.className[event.target.className.length-1];
        show.innerHTML=str;
    }
    else if(event.target.classList.contains("operator")){
        operator=event.target.className[event.target.className.length-1];
        str+=operator;
        show.innerHTML=str;
    }
    else if(event.target.classList.contains("equal")){
        var num1=str.substring(0,str.indexOf(operator));
        var num2=str.substring(str.indexOf(operator)+1,str.length);
        switch (operator){
            case "+":
                result=Number(num1)+Number(num2);
                break;
            case "-":
                result=Number(num1)-Number(num2);
                break;
            case "*":
                result=Number(num1)*Number(num2);
                break;
            case "/":
                result=Number(num1)/Number(num2);
                break;
            }
            show.innerHTML=result;
            str=String(result);
        }
}
Ckey.addEventListener("click",CkeyFun);
function CkeyFun(e){
    str="";
    result=0;
    show.innerHTML=result;
}
document.addEventListener("keyup",keyboardCalculator);
function keyboardCalculator(e){
    if (e.keyCode >= 96 && e.keyCode <= 105) {
        str+= event.keyCode - 96;
        show.innerHTML=str;
    }
    else if (e.keyCode == 110) {
        str+= ".";
        show.innerHTML=str;
    }
    else if((e.keyCode >=106 && e.keyCode <= 111) && (e.keyCode!==108)){
        switch (e.keyCode){
            case 107:
                operator="+"
                break;
            case 109:
                operator="-"
                break;
            case 106:
                operator="*"
                break;
            case 111:
                operator="/"
                break;
            }
        str+=operator;
        show.innerHTML=str;
    }
    else if(e.keyCode == 13){
        var num1=str.substring(0,str.indexOf(operator));
        var num2=str.substring(str.indexOf(operator)+1,str.length);
        switch (operator){
            case "+":
                result=Number(num1)+Number(num2);
                break;
            case "-":
                result=Number(num1)-Number(num2);
                break;
            case "*":
                result=Number(num1)*Number(num2);
                break;
            case "/":
                result=Number(num1)/Number(num2);
                break;
            }
            show.innerHTML=result;
            str=String(result);
        }
}