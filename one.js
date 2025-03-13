//array
let fruits = ["apple", "banana", "mango"];

console.log(fruits[1]); // banana
console.log(fruits[2]); // mango
console.log(fruits[3]); // undefined

fruits[1] = "kiwi";
console.log(fruits[1]); // kiwi
fruits.push("orange");
console.log(fruits[3]); // orange
console.log(fruits.length); // 4
console.log(fruits); // ["apple", "kiwi", "mango", "orange"]

fruits.pop();
console.log(fruits.length); // 3
console.log(fruits); // ["apple", "kiwi", "mango"]

fruits.unshift("orange"); // add to the beginning
console.log(fruits.length); // 4
console.log(fruits); // ["orange", "apple", "kiwi", "mango"]

fruits.shift(); // remove from the beginning
console.log(fruits.length); // 3
console.log(fruits); // ["apple", "kiwi", "mango"]

let n = fruits.length;
console.log(n); // 3

let idx = fruits.indexOf("banana");
console.log(idx); // -1

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
console.log("advanced shortcut for loop :");
for (let fruit of fruits) {
  console.log(fruit);
}
