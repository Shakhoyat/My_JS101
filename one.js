//class

const person = {
  firstname: "Max",
  lastname: "Mustermann",
  age: 25,
  hobbies: ["Sport", "Lesen", "Reisen"],
  address: {
    street: "Musterstra",
  },
  isemployed: true,
  greet: function () {
    console.log("Hallo, mein Name ist " + this.firstname);
  },
};
console.log(person.firstname);
console.log(person.hobbies[1]);
console.log(person.greet());
console.log(person.address.street);
