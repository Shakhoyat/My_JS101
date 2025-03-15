//shuffling an array

const cards = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

cards.sort(() => Math.random() - 0.5); //inefficient

console.log(cards);

//fisher yates shuffle algorithm

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i

    [array[i], array[j]] = [array[j], array[i]]; // swap elements
  }
}

shuffle(cards);
