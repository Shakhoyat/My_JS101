//closure =a function that has access to the outer function scope even after the outer function has returned
//closure is a way to access the outer function scope from an inner function

function outer() {
  //the variables are now in the closure scope and acting as private variables
  let outerVar = "I am the outer var";
  function inner() {
    let innerVar = "I am the inner var";
    console.log(outerVar);
    console.log(innerVar);
  }
  inner();
}

outerVar = "Im the new outer var brooo!!!";
// console.log(innerVar); //error
outer();
