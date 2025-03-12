//number guessing game


const min = 1;
const max = 100;
const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);


let attempts = 0;
let guess;
let running = true;

while (running) {


    guess = window.prompt(`Guess a number between ${min} and ${max}`);
    guess = Number(guess);

    if (isNaN(guess)) {
        window.alert('Please enter a valid number');
        continue;
    } else if (guess < min || guess > max) {
        window.alert(`Please enter a number between ${min} and ${max}`);
        continue;
    } else {
        if (guess > randomNumber) {
            window.alert('Too high');
            attempts++;
        } else if (guess < randomNumber) {
            window.alert('Too low');
            attempts++;
        } else {
            attempts++;
            window.alert(`Congratulations! You guessed the number in ${attempts} attempts`);
            running = false;
        }
    }

}