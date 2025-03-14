//combined

const numbers = [1, 2, 3, 4, 5];

const squares = numbers.map((number) => number * number);
console.log(squares);

const cubes = numbers.map((number) => Math.pow(number, 3));
console.log(cubes);

const evn = numbers.filter((number) => number % 2 === 0);
console.log(evn);

const total = numbers.reduce((acc, number) => acc + number, 100);
console.log(total);
