//arrow functions

const hello = function () {
  console.log("Hello");
};
hello();

const hello2 = (nam, age) => {
  console.log(`Hello ${nam} bro`);
  console.log(`You are ${age} years old`);
};

hello2("skt", 23);

setTimeout(function () {
  console.log("Hello");
}, 3000);

setTimeout(() => console.log("Hello after 4 seconds"), 4000);
