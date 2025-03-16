//html collection
const fruits = document.getElementsByClassName("fruits");

fruits[0].style.color = "red";
fruits[1].style.color = "green";
fruits[2].style.color = "blue";

fruits[0].style.backgroundColor = "black";

// for (let fruit of fruits) {
//   fruit.style.backgroundColor = "yellow";
// }

//ForEach() method dont work on html collection so we have to convert it into array

Array.from(fruits).forEach((fruit) => {
  fruit.style.backgroundColor = "yellow";
});
