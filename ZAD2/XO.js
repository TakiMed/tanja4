const board=document.getElementsByClassName("board")[0];
board.addEventListener("click",playGame);
let game=[0,1,2,3,4,5,6,7,8];
let combinations=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
let x=true;
let atempt=0;
function detectplayer(last,next){
    var p=document.getElementsByClassName("change")[0];
    p.innerHTML=next;
    p.classList.remove(last);
    p.classList.add(next);
}
//sredi
function checkwinner(){
    for(c of combinations){
        if (game[c[0]]===game[c[1]] && game[c[1]]===game[c[2]]){
            return game[c[0]];
        }
        else{
            continue;
        }
}
}
function restartGame(){
    fields=document.getElementsByClassName("field");
    Array.from(fields).forEach(function(f){
        f.innerHTML="";
        f.classList.remove("X");
        f.classList.remove("O");
        game=[0,1,2,3,4,5,6,7,8]
    })
    detectplayer("0","X");
    x=true;
    atempt=0;
    game=[0,1,2,3,4,5,6,7,8];
}
function playGame(e){
    if(event.target.classList.contains("field")){
        let place = event.target.className[event.target.className.length-1];
        var field=event.target;
        if(!field.textContent.localeCompare("X") || !field.textContent.localeCompare("O")) return;
        if(x){
            game[place]="X";
            let xNode = document.createTextNode("X");
            event.target.classList.add("X");
            field.appendChild(xNode);
            detectplayer("X","O");
            x=false;
            atempt++;
            if (atempt>=5){
                checkwinner();
            }
        }
        else{
            game[place]="O";
            let oNode=document.createTextNode("O");
            event.target.classList.add("O");
            field.appendChild(oNode);
            detectplayer("O","X");
            x=true;
            atempt++;
            if (atempt>=6){
                checkwinner();
            }
        }
        if (checkwinner()!=undefined){
            alert ("CONGRADULATIONS, "+ checkwinner()+"  YOU WON!");
            restartGame();
        }
        if (atempt==9 && checkwinner()==undefined){
            alert ("ITS EVEN! PLAY AGAIN");
            restartGame();
        }
    }
}

