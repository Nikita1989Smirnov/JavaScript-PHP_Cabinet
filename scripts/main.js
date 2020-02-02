function start(css, func){

    document.querySelectorAll(css).forEach(function(element){

        element.onclick = func;
    
    });    

}

start(".show-modal", showModal);
start(".modal-wrap", hideModal);
start(".hide-window", hideModal);
start(".modal-window", stopPropagation);

function showModal(){

    document.querySelector(this.dataset.set).classList.remove("hide-modal");
    document.onkeyup = function(event){

        console.log(event);
        if (event.keyCode == 27){
    
            hideModal();
    
        }
    
    }
    
}

function hideModal(){

    document.querySelectorAll(".modal-wrap").forEach(function(element){

        element.classList.add("hide-modal");

    });

    document.onkeyup = null;
    
}

function stopPropagation(){

    event.stopPropagation();

}

document.querySelector("#rules").onclick = function(){

    document.querySelector(".line").style.left = "-380px";

}

document.querySelector("#back").onclick = function(){

    document.querySelector(".line").style.left = "0px";

}

let btnIdsabled = document.querySelector("#signup-btn");
document.querySelector("#agree").onchange = function(){

    if (btnIdsabled.disabled){

        btnIdsabled.disabled = false;
        document.querySelector("#rules").style.color = "red";

    } else {

        btnIdsabled.disabled = true;
        document.querySelector("#rules").style.color = "black";

    }
    

}