//Method chaining

let username=window.prompt("Enter your name :  ");

username=username.trim();

let l1=username.charAt(0).toUpperCase();

let extraChars=username.slice(1).toLowerCase();

username=l1+extraChars;
console.log(username);


//using method chaining
username=username.trim().charAt(0).toUpperCase()+username.slice(1).toLowerCase();
console.log(username);