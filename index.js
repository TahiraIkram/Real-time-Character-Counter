const textAreaEl=document.getElementById("textarea");
const totalCounterEl= document.getElementById("total-counter");
const remainingEl= document.getElementById("remaining-counter");

textAreaEl.addEventListener("keyup",()=>{
    updateCounter()
})
function updateCounter(){
    totalCounterEl.innerHTML=textAreaEl.value.length;
    remainingEl.innerHTML=textAreaEl.getAttribute("maxLength")-textAreaEl.value.length;

}
updateCounter();