
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";

/*
  Put the JavaScript code you want below.
*/
const display = document.querySelector("#display");
console.log(display);
const inputs = document.querySelectorAll(".inputField");
console.log(inputs);
const labels = document.querySelectorAll(".label");
console.log(labels);
const content = document.querySelector(".content")

display.addEventListener(`click`, handleClickButton);
function handleClickButton() {
  const newDiv = document.createElement("div");
  newDiv.className = "summary";
  content.appendChild(newDiv);
  console.log(newDiv);
  for (let i = 0; i < labels.length; i++) {
    const newHeader = document.createElement("h3");
    newHeader.innerText = labels[i].innerText;
    newDiv.appendChild(newHeader);
    const newP = document.createElement("p");
    newP.innerText = inputs[i].value;
    newDiv.appendChild(newP)
    }
  }
