//closure =a function that has access to the outer function scope even after the outer function has returned
//closure is a way to access the outer function scope from an inner function
//closure maintains state...its kind of works like a class-object

function cnter() {
  let cnt = 0;
  function increment() {
    cnt++;
    console.log(`The count increased to ${cnt}`);
  }
  function getCount() {
    return cnt;
  }
  return { increment, getCount };
}

// cnt(); //The count increased to 1

const mycnt = cnter();
mycnt.increment(); //The count increased to 1
mycnt.increment(); //The count increased to 1
mycnt.increment(); //The count increased to 1

// cnt.cnt = 100;
// console.log(cnter.cnt); //100

console.log(`The count is ${mycnt.getCount()}`); //The count is 3
