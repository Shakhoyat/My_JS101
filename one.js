//spread operator is used to copy the object and not the reference

let numbers = [10, -2, 3, 4];

let maxi = Math.max(...numbers);
let mini = Math.min(...numbers);
console.log(maxi);
console.log(mini);

let user = "John";
let user2 = [...user].join("-");
console.log(user2);

let fruits = ["Apple", "Banana", "Orange"];
let vegetables = ["Carrot", "Potato", "Cabbage"];
//shallo copy means it will copy the references in a different data structure

let foods = [...fruits, ...vegetables, "eggs", "milk"];

console.log(foods);
