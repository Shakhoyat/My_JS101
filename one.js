//function expression

const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(function (num) {
  return num * num;
});

console.log(squares);
//output: [1, 4, 9, 16, 25]

const cubes = numbers.map(function (n) {
  return n * n * n;
});
console.log(cubes);
//output: [1, 8, 27, 64, 125]
const evenNum = numbers.filter(function (n) {
  return n % 2 === 0;
});
console.log(evenNum);

//output: [2, 4]
const total = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
});
console.log(total);
//output: 15
