let isOpen = false;
let btn = document.querySelector(".switch")
let bulpTop = document.querySelector(".bulp-top")
let bulpBottom = document.querySelector(".bulp-bottom")
btn.addEventListener("click",function(){
    if(isOpen){
        btn.classList.remove("on")
        bulpTop.classList.remove("bulpOn")
        bulpBottom.classList.remove("bulpOn")
    }else{
        btn.classList.add("on")
        bulpTop.classList.add("bulpOn")
        bulpBottom.classList.add("bulpOn")
    }
    isOpen = !isOpen
})