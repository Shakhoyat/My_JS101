// inheritance = allows a new class to inherit properties and methods from a  existing class

class animal {
  alive = true;
  eat() {
    console.log(`This ${this.name} is eating!!!`);
  }
  sleep() {
    console.log(`This ${this.name} is sleeping!!!`);
  }
}
class Rabit extends animal {
  name = "rabit";
}
class fish extends animal {
  name = "fish";
}
class hawk extends animal {
  name = "hawk";
}
const hawk1 = new hawk();
hawk1.eat();
hawk1.sleep();

console.log(hawk1.alive);
hawk1.alive = false;
console.log(hawk1.alive);
