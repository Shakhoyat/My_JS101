//reduce() method reduces the array to a single value

const prices = [5, 10, 15, 20, 25];
const total = prices.reduce(sum);

function sum(accumulator, currentValue) {
  return accumulator + currentValue;
}

console.log(total);
