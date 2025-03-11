//random number generator

const mybtn = document.getElementById('mybtn');
const mylbl = document.getElementById('mylbl');

const min=1;
const max=6;

let randomNumber ;

mybtn.onclick= function(){
    randomNumber = Math.floor(Math.random()*(max-min+1)+min);
    mylbl.textContent = randomNumber;
}



