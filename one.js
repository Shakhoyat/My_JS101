//sort method in js

let fruits = ["apple", "orange", "coconut", "pineapple", "banana"];

let numbers = [1, 2, 93, 4, 15, 61, 7, 8, 9, 10];
// console.log(fruits.sort());
console.log(numbers.sort((a, b) => a - b)); //ascending order
console.log(numbers.sort((a, b) => b - a)); //descending order

const people = [
  { name: "John", age: 30, cgpa: 3.5 },
  { name: "Jane", age: 25, cgpa: 3.7 },
  { name: "Jim", age: 40, cgpa: 3.91 },
];
people.sort((a, b) => a.cgpa - b.cgpa);
console.log(people);

//sorting string within object

people.sort((a, b) => a.name.localeCompare(b.name)); //ascending order
console.log(people);

people.sort((a, b) => b.name.localeCompare(a.name)); //ascending order
console.log(people);
