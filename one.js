//callback is a function that is passed as an argument to another function and is executed after some operation has been completed

function sum(a, b, callback) {
  callback(a + b);
}
function display_func(result) {
  console.log(result);
}

function displayPage(result) {
  document.getElementById("myh1").textContent = result;
}

sum(5, 6, displayPage); //this means when sum is done, displayPage will be called with the result of sum
