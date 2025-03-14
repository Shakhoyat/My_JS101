//getter and  setters

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  set width(width) {
    if (width > 0) {
      this._width = width;
    } else {
      console.log("width must be a positive number");
    }
  }

  set height(height) {
    if (height > 0) {
      this._height = height;
    } else {
      console.log("height must be a positive number");
    }
  }

  get width() {
    return this._width.toFixed(2);
  }
  get height() {
    return this._height.toFixed(2);
  }

  get area() {
    return this._width * this._height;
  }
  get perimeter() {
    return 2 * (this._width + this._height);
  }
}

const rectangle = new Rectangle(10, 20);

console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);
console.log(rectangle.perimeter);
