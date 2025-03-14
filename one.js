//filter()=creates a new array by filtering out elements

let nums = [1, 2, 21, 4, 5, 6, 7, 7, 9];

function isEven(element) {
  return element % 2 === 0;
}
let evenNums = nums.filter(isEven);
console.log(evenNums);

function isOdd(element) {
  return element % 2 !== 0;
}
let oddNums = nums.filter(isOdd);
console.log(oddNums);
