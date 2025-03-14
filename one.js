// map()=accepts a callback function and returns a new array
// with the result of the callback function applied to each element
// of the original array

const numbers = [1, 2, 3, 4, 5];

function square(n) {
  return n * n;
}
const squares = numbers.map(square);
console.log(squares); // [1, 4, 9, 16, 25]

function double(n) {
  return n * 2;
}
const doubles = numbers.map(double);
console.log(doubles); // [2, 4, 6, 8, 10]

function half(n) {
  return n / 2;
}
const halves = numbers.map(half);
console.log(halves); // [0.5, 1, 1.5, 2, 2.5]
