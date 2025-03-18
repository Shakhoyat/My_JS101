//NodeLists = static collection of html elements by (id,class,element)
let buttons = document.querySelectorAll(".mybtn");

//add an element
const newButton = document.createElement("button");
newButton.textContent = "Button5";
newButton.classList = "mybtn";
document.body.appendChild(newButton);

console.log(buttons);

buttons = document.querySelectorAll(".mybtn");
console.log(buttons);
