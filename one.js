//THIS keyword doesnot work with arrow function

const person1 = {
  name: "John",
  age: 30,
  greet() {
    console.log("Hi, I am " + this.name);
  },
};
person1.greet();
const person2 = {
  name: "sujon",
  age: 23,
  greet() {
    console.log("Hi, I am " + this.name);
  },
};
person2.greet();
