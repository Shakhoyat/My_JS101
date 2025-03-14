//constructor

function car(brand, model, year, color) {
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.color = color;

  this.drive = function () {
    console.log("driving");
  };
  this.stop = function () {
    console.log("stop");
  };
  this.getCarInfo = function () {
    console.log(
      `Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}, Color: ${this.color}`
    );
  };
}

const car1 = new car("BMW", "X5", 2020, "black");
const car2 = new car("Audi", "A6", 2019, "white");
console.log(car1.brand); // BMW
console.log(car2.brand); // Audi
car1.drive(); // driving
car2.getCarInfo(); // driving
