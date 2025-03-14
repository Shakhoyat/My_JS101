//classes
class product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  display() {
    console.log(this.name + " product is priced as : " + this.price);
  }
  calcTotal(salesTax) {
    return this.price + this.price * salesTax;
  }
}

const product1 = new product("Laptop", 1000);
product1.display();
const salesTax = 0.08;

const total = product1.calcTotal(salesTax);
console.log(total);
