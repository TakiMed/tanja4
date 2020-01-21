var form=document.getElementById("form");
var searchedList=document.getElementById("itemSearchList");
var taskList=document.getElementById("items");
var filter=document.getElementById("filter");
var inputField=document.getElementById("newTask");
//localStorage.clear();
start=true;
searchedList.style.display="none";
function addTask(t){
    var li=document.createElement("li");
    li.appendChild(document.createTextNode(t));
    li.className="item";
    delButton=document.createElement("button");
    delButton.className="delete";
    delButton.appendChild(document.createTextNode("X"));
    li.appendChild(delButton);
    taskList.appendChild(li);
    searchedLi=document.createElement("li");
    searchedLi.appendChild(document.createTextNode(t));
    searchedLi.className="searched";
    searchedList.appendChild(searchedLi);
}
let items;
if (start){
    if (localStorage.getItem('items')) {
        items = JSON.parse(localStorage.getItem('items'))
        for(item of items){
            addTask(item);
        }
      } else {
        items = [];
      }
    start=false;
}
form.addEventListener("submit",addNewTask);
function addNewTask(e){
    e.preventDefault();
    var input=inputField.value;
    addTask(input);
    items.push(input);
    localStorage.setItem("items",JSON.stringify(items));
    console.log(window.localStorage);
}

taskList.addEventListener("click",removeTask);
function removeTask(e){
    if (e.target.className=="delete"){
        if (confirm("Are you sure you want to remove task?")){
            var li=event.target.parentNode;
            taskList.removeChild(li);
            var taskText=li.firstChild.textContent.toLowerCase();
            var searchedliColl=searchedList.getElementsByTagName("li");
            Array.from(searchedliColl).forEach(function(element){
                var elementText=element.firstChild.textContent.toLowerCase();
                if(elementText==taskText){
                    searchedList.removeChild(element);
                    items.splice(items.indexOf(elementText),1);
                    localStorage.setItem("items",JSON.stringify(items));
                }
            }); 
           }
}
}

function findSerched(t){
    var searchedliColl=searchedList.getElementsByTagName("li");
    Array.from(searchedliColl).forEach(function (element){
    var elementText=element.firstChild.textContent;
    if (elementText.toLowerCase().startsWith(t)){
        element.style.display=="block";
    }
    else{
        element.style.display="none";
    }
    });
}
function findTask(t){
    var taskListLi=taskList.getElementsByTagName("li");
    Array.from(taskListLi).forEach(function (taskLi){
        var taskText=taskLi.firstChild.textContent;
        if (taskText.toLowerCase().indexOf(t)!=-1 || t===""){
            taskLi.style.display="block";
        }
        else{
            taskLi.style.display="none";
        }
    });
}
function displayList(){
    searchedList.style.display="block";
}
filter.addEventListener("keyup",filterTasks);
function filterTasks(e){
    displayList();
    var text=event.target.value.toLowerCase();
    findSerched(text);
    findTask(text);
}

searchedList.addEventListener("click",showList);
function showList(e){
    if (event.target.className=="searched"){
        var text=event.target.textContent.toLowerCase();
        filter.value=event.target.textContent;
        findSerched(text);
        findTask(text);
        inputField.value="";
}
}
filter.addEventListener("focus",displayList);
window.addEventListener("click",hideList);
function hideList(e){
    if (e.target.classList.contains("container")){
        searchedList.style.display="none";
        findTask("");
}
}
filter.addEventListener("keyup",listing);
let  i=0;
first=true;
function listing(e){
    displayList();
    var searchedliColl=searchedList.getElementsByTagName("li");
    if (first){
        searchedliColl[0].style.border="thick solid rgb(231, 235, 34)";
        first=false;
    }
    else{
        l=searchedliColl.length-1;
        if (e.keyCode==40){ 
            searchedliColl[i].style.border="none";
            if (i!==l){
                i+=1;
            }
            else{
                i=0;
            }
            searchedliColl[i].style.border="thick solid rgb(231, 235, 34)";
        }
        else if(e.keyCode==38){
            searchedliColl[i].style.border="none";
            if (i!==0){
                i-=1;
            }
            else{
                i=l;
            }
            searchedliColl[i].style.border="thick solid rgb(231, 235, 34)";
        }
        else if(e.keyCode==13){
            var value=searchedliColl[i].textContent;
            event.target.value=value;
            findTask(value.toLowerCase());
            inputField.value=""; //stavila sam ovo brisanje na click i na ovaj enter jer me buni kad mi ostane upisano u polje
        }
    }
}