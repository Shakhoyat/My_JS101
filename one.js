let fruits = ["apple", "banana", "orange"];

function upperCaseFruit(fruit, index, fruits) {
  fruits[index] = fruit.toUpperCase();
}

function lowerCaseFruit(fruit, index, fruits) {
  fruits[index] = fruit.toLowerCase();
}

function capitalize1stLetter(fruit, index, fruits) {
  fruits[index] = fruit.charAt(0).toUpperCase() + fruit.slice(1);
}
function display(fruit) {
  console.log(fruit);
}
fruits.forEach(capitalize1stLetter);
fruits.forEach(display);
