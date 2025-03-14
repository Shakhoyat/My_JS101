//person
class Person {
  constructor(firstname, lastname, age) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
  }

  set firstname(first) {
    if (typeof first === "string" && first.length > 0) {
      this._firstname = first;
    } else {
      throw new Error("Invalid input.It must be a non-empty string!!!");
    }
  }

  set lastname(last) {
    if (typeof last === "string" && last.length > 0) {
      this._lastname = last;
    } else {
      throw new Error("Invalid input.It must be a non-empty string!!!");
    }
  }

  set age(value) {
    if (typeof value === "number" && value > 0) {
      this._age = value;
    } else {
      throw new Error("Invalid input.It must be a number!!!");
    }
  }
  get firstname() {
    return this._firstname;
  }

  get lastname() {
    return this._lastname;
  }

  get age() {
    return this._age;
  }
  greet() {
    console.log(`Hello ${this.firstname} ${this.lastname}`);
  }
}

const person = new Person("John", "Doe", 30);

console.log(person.firstname);
console.log(person.lastname);
console.log(person.age);
person.greet();
