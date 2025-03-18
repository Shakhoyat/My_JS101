//NodeLists = static collection of html elements by (id,class,element)
let buttons = document.querySelectorAll(".mybtn");

//mouseover + mouseout event listener

buttons.forEach((button) => {
  button.addEventListener("mouseover", (event) => {
    event.target.style.backgroundColor = "yellow";
  });
  button.addEventListener("mouseout", (event) => {
    event.target.style.backgroundColor = "purple";
  });
});
