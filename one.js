//Array of objects

const fruits = [
  { name: "apple", color: "red", calories: 95 },
  { name: "banana", color: "yellow", calories: 105 },
  { name: "grape", color: "purple", calories: 62 },
  { name: "kiwi", color: "brown", calories: 42 },
  { name: "orange", color: "orange", calories: 62 },
  { name: "pear", color: "green", calories: 57 },
  { name: "strawberry", color: "red", calories: 4 },
  { name: "watermelon", color: "green", calories: 46 },
];

// console.log(fruits[0].name);
// console.log(fruits[0].color);
// console.log(fruits[4].calories);

fruits.push({ name: "pineapple", color: "yellow", calories: 83 });
fruits.pop();
console.log(fruits);
fruits.shift(); //remove from the beginning
console.log(fruits);
fruits.unshift({ name: "mango", color: "yellow", calories: 202 }); //add to the beginning
console.log(fruits);
fruits.splice(2, 1); //remove 1 element from index 2
console.log(fruits);

//for each method

fruits.forEach((fruit) => {
  console.log(fruit.color);
});

//map method

const fruitNames = fruits.map((fruit) => fruit.name); //return an array of fruit names
console.log(fruitNames);

//filter method

const redFruits = fruits.filter((fruit) => fruit.color === "red");
console.log(redFruits);

//reduce method

const maxFruit = fruits.reduce((maxFruit, fruit) =>
  fruit.calories > maxFruit.calories ? fruit : maxFruit
);
console.log(maxFruit.name);
