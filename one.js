//Async => makes a function return a promise
//Await => makes an async function wait for a promise

function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dogwalked = true;
      if (dogwalked) {
        resolve("walked the dog");
      } else {
        reject("You didn't walk the dog");
      }
    }, 1500);
  });
}

function cleanKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const kitchenCleaned = true;
      if (kitchenCleaned) {
        resolve("cleaned the kitchen");
      } else {
        reject("You didn't clean the kitchen");
      }
    }, 1000);
  });
}

function takeoutTrash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const trashTakenOut = true;
      if (trashTakenOut) {
        resolve("took out the trash");
      } else {
        reject("You didn't take out the trash");
      }
    }, 500);
  });
}

async function doChores() {
  const walkDogResult = await walkDog();
  console.log(walkDogResult);
  const cleanKitchenResult = await cleanKitchen();
  console.log(cleanKitchenResult);
  const takeoutTrashResult = await takeoutTrash();
  console.log(takeoutTrashResult);

  console.log("finished all the chores!!!");
}
doChores();
