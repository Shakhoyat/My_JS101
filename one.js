//string slicing

const fullName = "John Doe";
const firstName = fullName.slice(0, 4);// 0 is inclusive and 4 is exclusive
console.log(firstName); // John

const lastName = fullName.slice(5);// 5 is inclusive
console.log(lastName); // Doe  

let firstchar=fullName.slice(0,1);
let lastchar=fullName.slice(-1);
console.log(firstchar);
console.log(lastchar);