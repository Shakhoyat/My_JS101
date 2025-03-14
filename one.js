// inheritance = allows a new class to inherit properties and methods from a  existing class

class animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  move(speed) {
    console.log(`${this.name} is moving with ${speed} mph`);
  }
}
class Rabit extends animal {
  constructor(name, age, runspeed) {
    super(name, age);
    this.runspeed = runspeed;
  }
  run() {
    console.log(`${this.name} can run!!!!`);
    super.move(this.runspeed);
  }
}
class fish extends animal {
  constructor(name, age, swimspeed) {
    super(name, age);
    this.swimspeed = swimspeed;
  }
  swim() {
    console.log(`${this.name} can swim!!!!`);
    super.move(this.swimspeed);
  }
}
class hawk extends animal {
  constructor(name, age, flyspeed) {
    super(name, age);
    this.flyspeed = flyspeed;
  }
  fly() {
    console.log(`${this.name} can fly!!!!`);
    super.move(this.flyspeed);
  }
}

const hawk1 = new hawk("hawk1", 2, 100);
const fish1 = new fish("fish1", 1, 10);
const rabit1 = new Rabit("rabit1", 1, 20);

rabit1.run();
fish1.swim();
hawk1.fly();
