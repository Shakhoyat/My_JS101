//for each() method

let arr = [1, 2, 3, 4, 5];
arr.forEach(double);
arr.forEach(square);
arr.forEach(display); //array.forEach(callbackFunction) means element ,index ,array are provided

function double(item, index, array) {
  array[index] = item * 2;
}

function triple(item, index, array) {
  array[index] = item * 3;
}

function square(item, index, array) {
  array[index] = item * item;
}

function display(item) {
  console.log(item);
}
