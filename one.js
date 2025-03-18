//NodeLists = static collection of html elements by (id,class,element)
let buttons = document.querySelectorAll(".mybtn");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    event.target.style.backgroundColor = "tomato";
  });
});
