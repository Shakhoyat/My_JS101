//rest parameters in js

//rest is opposite of spread operator
//spread operator is used to spread the elements of an array or object
//rest is used to collect multiple elements and put them into a single array

// const food1 = "pizza";
// const food2 = "burger";
// const food3 = "icecream";

// //if we want to collect all the food items in a single array
// function collectFoods(...foods) {
//   console.log(...foods);
// }
// collectFoods(food1, food2, food3);

const food1 = "pizza";
const food2 = "burger";
const food3 = "icecream";
const food4 = "chocolate";
const food5 = "cake";
const food6 = "donut";
const food7 = "pasta";
const food8 = "noodles";
const food9 = "sandwich";
function openfridge(...foods) {
  console.log(...foods);
}
openfridge(food1, food2, food3, food4, food5, food6, food7, food8, food9);
//output: pizza burger icecream chocolate cake donut pasta noodles sandwich
//all the food items are collected in a single array
function getfood(...foods) {
  return foods;
}
const foods = getfood(
  food1,
  food2,
  food3,
  food4,
  food5,
  food6,
  food7,
  food8,
  food9
);
console.log(foods);
//output: ["pizza", "burger", "icecream", "chocolate", "cake", "donut", "pasta", "noodles", "sandwich"]
