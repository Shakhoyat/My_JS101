//async function to sync function suing callback

function func1(callback) {
  setTimeout(() => {
    console.log("task 1 !!!!");
    callback();
  }, 3000);
}
function func2() {
  console.log("task2");
  console.log("task3");
  console.log("task4");
}

func1(func2);
