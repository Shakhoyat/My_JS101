//const 

const PI=3.14159;
let radius;
let circumference;

// radius=window.prompt("Enter the radius of the circle");
// console.log(`The circumference is : `+circumference);

document.getElementById("mySubmit").onclick=function(){
   radius=document.getElementById("radd").value;
   radius=Number(radius);
   circumference=2*PI*radius;
   document.getElementById("myH3").textContent=`The circumference is : ${circumference} cm`;
};
