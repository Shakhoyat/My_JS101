//new Promise((resolve, reject) => {asynchronous code here})

function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("walked the dog");
    }, 1500);
  });
}

function cleanKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("cleaned the kitchen");
    }, 1000);
  });
}
function takeoutTrash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("took out the trash");
    }, 500);
  });
}
walkDog()
  .then((value) => {
    console.log(value);
    return cleanKitchen();
  })
  .then((value) => {
    console.log(value);
    return takeoutTrash();
  })
  .then((value) => {
    console.log(value);
    console.log("finished all the chores!!!");
  });
