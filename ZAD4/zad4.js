(function(){
    const left=document.getElementById("left");
    const right=document.getElementById("right");
    left.addEventListener("click",function(){slide(-1)});
    right.addEventListener("click",function(){slide(1)});
    let images=document.getElementsByClassName("slide");
    let br=1;
    showSlides(1);
    function slide(num){
        showSlides(br+=num);
    }
    function showSlides(n){
        if(n>images.length){
            br=1;
        }
        if(n<1){
            br=images.length
        }
        for(var i=0;i<images.length;i++){
            images[i].style.display="none";
        }
        images[br-1].style.display="block";
    }
    const container=document.getElementsByClassName("container")[0];
    container.addEventListener("mouseover",arrowKeysON);
    container.addEventListener("mouseout",arrowKeysOFF);
    function arrowKeysON(e){
        document.addEventListener("keyup",keySlider);
    }
    function arrowKeysOFF(e){
        document.removeEventListener("keyup",keySlider);
    }
    function keySlider(e){
        if(event.keyCode=="37"){
            slide(-1);
        }
        else if(event.keyCode=="39"){
            slide(1);
        }
    }
    container.addEventListener("click",zoom);
    function zoom(e){
        currentImage=event.target;
        const xButton=document.createElement("button");
        xButton.appendChild(document.createTextNode("X"));
        xButton.classList.add("xButton");
        document.body.appendChild(xButton); 
        currentImage.style.height="90vh";
        currentImage.style.width="90vw";
        document.body.style.background="violet";
        left.style.top="40%";
        right.style.top="40%";
        xButton.addEventListener("click",unZoom);
    }
    function unZoom(e){
        console.log(event.target);
        event.target.style.display="none";
        document.body.style.background="white";
        container.style.height="100px";
        container.style.width="200px";
    }
})();