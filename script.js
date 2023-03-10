const output = document.getElementById("output");
const buttons = document.getElementsByTagName("button");
let clickedValue = "";
function getGlickedValue(e) {
    console.log(e.target.innerText)
}


for (let button of buttons) {
    button.addEventListener("click", getGlickedValue)
}