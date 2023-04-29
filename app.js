var head=document.querySelector(".main");
var btn=document.querySelector(".menu");
var toggleN=()=>{
    head.classList.toggle("active")
}


btn.addEventListener("click",()=>toggleN())