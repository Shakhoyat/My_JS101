//nested objects=> objects inside of other objects
class Address {
  constructor(city, street, zip) {
    this.city = city;
    this.street = street;
    this.zip = zip;
  }
}
class person {
  constructor(name, age, ...address) {
    this.name = name;
    this.age = age;
    this.address = new Address(...address);
  }
}

const person1 = new person("John", 30, "New York", "Wall Street", 10005);
// console.log(person1);

const person2 = new person("Jane", 25, "California", "Sunset Blvd", 90001);
// console.log(person2);

const person3 = new person("Doe", 35, "Texas", "Main Street", 75001);
console.log(person3.address.street);
