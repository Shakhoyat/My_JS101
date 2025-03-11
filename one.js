//if else statement

const myip=document.getElementById('myip');
const mybtn=document.getElementById('mybtn');
const mylbl=document.getElementById('mylbl');
const resultElement=document.getElementById('resultElement');

let age;

mybtn.onclick=function(){

   age=Number(myip.value);
   if(age>=18){
       resultElement.textContent="You are eligible to vote";
   }
   else{
       resultElement.textContent="You are not eligible to vote";
   }
}
