/*
How to take user input
   1.easy way=window.prompt("Enter your name");
   2.professional way=html textboxes
How to print output
   1.console.log("Hello World");
   2.alert("Hello World");
   3.document.write("Hello World");
*/
// let user;
// user=window.prompt("Enter your name");
// console.log("Hello "+user);

//By using html textboxes
let username;
document.getElementById("mysub").onclick=function(){
username=document.getElementById("mytext").value;
document.getElementById("myh1").textContent=`Yoooo ${username} !!!`;
};