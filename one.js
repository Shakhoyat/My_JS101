//counter program

const decrementButton = document.getElementById('decrementButton');
const incrementButton = document.getElementById('incrementButton');
const resetButton = document.getElementById('resetButton');
const counterLabel = document.getElementById('counterLabel');

let counter = 0;

incrementButton.onclick = () => {
counter++;
counterLabel.textContent = counter;

};
decrementButton.onclick = () => {
   counter--;
counterLabel.textContent = counter;
};
resetButton.onclick = () => {

   counter=0;
counterLabel.textContent = counter;
};
