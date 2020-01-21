const form=document.getElementById("form");
const word=document.getElementsByClassName("word")[0];
const input=document.getElementById("num");
const add=document.getElementById("addButton");
let start=true;
let myWord="";
if(start){
    createElement(5);
    start=false;
}
//da mogu svaki put da pozivam istu funkciju kad kreiram polja
function createElement(n){
    for(let i=0; i<n;i++){
        var field=document.createElement("div");
        field.classList.add("field");
        let letter = document.createElement("input");
        letter.classList.add("letter");
        field.appendChild(letter);
        let deleteButton = document.createElement("button");
        let xNode=document.createTextNode("X");
        deleteButton.appendChild(xNode);
        deleteButton.classList.add("delete");
        field.appendChild(deleteButton);
        word.appendChild(field);
    }
}
//da bi mi svaki put kreirao novu listu;
function reset(){
    var fields=document.getElementsByClassName("field");
    Array.from(fields).forEach(function(f){
        word.removeChild(f);
    });
    myWord="";
}
 
form.addEventListener("submit",create);
function create(e){
    reset();
    e.preventDefault();
    var numb=input.value;
    createElement(numb);
    input.value=""; //da ne buni
}

add.addEventListener("click",function(){createElement(1);});

word.addEventListener("click",removeField);
function removeField(e){
    if (e.target.classList.contains("delete")){
        (confirm("Jeste li sigurni da želite obrisati slovo?"))
            const field=event.target.parentNode;
            word.removeChild(field);
    }
}
/*word.addEventListener("dblclick",editLetter);
function editLetter(e){
    if(event.target.classList.contains("letter")){
        var l=event.target.value;
        if (event.keyCode==8){

        }
        console.log(l);
    }
}*/
word.addEventListener("keyup",validation);
function validation(e){
    if(event.target.classList.contains("letter")){
        var l=event.target.value;
        if(l.match(/[a-zA-Z ]/)===null || event.target.value.length>1){
            l="";
            alert("Unesite jedno slovo ili razmak!");
        }
        else{
            myWord+=l;
            ifPalindrome();
        }
    }
}

function ifPalindrome(){
    myWord=myWord.replace(/\s/g,'');
    var fields=document.getElementsByClassName("field");
    var l=Array.from(fields).length;
    myWordArray=myWord.split("");
    p=document.getElementsByClassName("change")[0];
    if (myWordArray===myWordArray.reverse() && myWord.length==l){
        p.innerHTML="JESTE";
        reset();
        start=true;
    }
    else{
        p.innerHTML="NIJE";
    }
}

