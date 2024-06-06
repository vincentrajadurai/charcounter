const totalEl = document.getElementById("total");
const remainingEl = document.getElementById("remaining");
const textEl = document.getElementById("text");



textEl.addEventListener("keyup", () => { 
    counter()
})

function counter(){
    totalEl.innerText = textEl.value.length;
    remainingEl.innerText = textEl.getAttribute("maxlength") - textEl.value.length;
}
counter()