//eventListener = Listen for specific events to create interactivity
//.addEventListener(event,callback)

const mybox = document.getElementById("mybox");

const mybtn = document.getElementById("mybtn");
// function changeColor(event) {
//   event.target.style.backgroundColor = "tomato";
//   event.target.textContent = "ouch!!!";
// }

// mybox.addEventListener("click", changeColor);
//or
// mybox.addEventListener("click", function (event) {
//   event.target.style.backgroundColor = "tomato";
//   event.target.textContent = "ouch!!!";
// });

// OR

mybtn.addEventListener("click", (event) => {
  event.target.style.backgroundColor = "tomato";
  event.target.textContent = "ouch!!!";
});

mybox.addEventListener("mouseover", (event) => {
  event.target.style.backgroundColor = "yellow";
  event.target.textContent = "dont do itttt!!!";
});
mybox.addEventListener("mouseout", (event) => {
  event.target.style.backgroundColor = "lightgreen";
  event.target.textContent = "oh gosh!!!";
});
