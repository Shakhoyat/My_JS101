function sum(...numbers) {
  let result = 0;

  for (let number of numbers) {
    result += number;
  }
  return result;
}

const total = sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

console.log(`The total is ${total}`); // The total is 55
function getAvg(...numbers) {
  let result = 0;

  for (let number of numbers) {
    result += number;
  }
  return result / numbers.length;
}

const avg = getAvg(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(`The average is ${avg}`); // The average is 5.5

function combineStrings(...strings) {
  return strings.join(" ");
}
const fullname = combineStrings("John", "Doe");
console.log(`The full name is ${fullname}`); // The full name is John Doe
