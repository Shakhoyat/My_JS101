//nested objects=> objects inside of other objects

const person = {
  fullname: "John Doe",
  age: 25,
  isStudent: false,
  hobbies: ["reading", "coding", "swimming"],
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY",
    zip: "10001",
  },
};
console.log(person.fullname);
console.log(person.age);
console.log(person.isStudent);
console.log(person.hobbies);
console.log(person.address.city);

for (const property in person.address) {
  console.log(`${property}: ${person.address[property]}`);
}
