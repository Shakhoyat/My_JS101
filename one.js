//destructuring = extract values from arrays and objects ,then assign them to variables in a single line of code
//[]=to perform array destructuring
//{}=to perform object destructuring

//swapping values of two variables
let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a);
console.log(b);
//swapping to elements of an array
let arr = [1, 2, 3, 4];
[arr[0], arr[1]] = [arr[1], arr[0]];
console.log(arr);

//assigning elements of an array to variables
const arr2 = [1, 2, 3, 4, 104, 110, 112];
const [a1, b1, c1, d1, ...extra] = arr2;
console.log(a1);
console.log(b1);
console.log(extra);

//extracting values from obj

const person1 = {
  firstname: "skt",
  lastname: "rahman",
  age: 39,
  job: "Fry Cook",
};
const person2 = {
  firstname: "sohan",
  lastname: "islam",
  age: 34,
  job: "Army",
};
const { firstname, lastname, age, job } = person1;

// console.log(firstname);
// console.log(lastname);
// console.log(age);
// console.log(job);

const { firstname: fn, lastname: ln, age: ag, jobz = "unemployed" } = person2;
console.log(fn);

//destructuring in function parameters
function printPerson({ firstname, lastname, age, job }) {
  console.log(firstname);
  console.log(lastname);
  console.log(age);
  console.log(job);
}
printPerson(person1);
