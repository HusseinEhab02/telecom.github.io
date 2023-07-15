const btnEl=document.querySelectorAll(".btn")
boxsel=document.querySelectorAll(".box")
btnEl.forEach((b)=>{
    b.addEventListener("click" , (event)=>{
        ra()
        event.target.classList.add("active")
        event.target.innerText= "Loading.."
    })
})
function ra(){
    btnEl.forEach((b)=>{
        b.innerText = "Get Now"
        b.classList.remove("active")
    })
    
}