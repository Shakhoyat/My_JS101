//callback is a function that is passed as an argument to another function and is executed after some operation has been completed

function hello(callback) {
  console.log("This is hello");
  callback();
}
function goodbye() {
  console.log("This is goodbye");
}
function leave() {
  console.log("leave!!!");
}
// hello(goodbye);
hello(leave);
