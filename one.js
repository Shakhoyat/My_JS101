//string methods

let username="Shujon   ";

console.log(username.charAt(0));
console.log(username.length);
username = username.toUpperCase();
console.log(username);
username = username.toLowerCase();

console.log(username);

//trim= remove extra whitespace from the string
username=  username.trim();
console.log(username);
username = username.replace("shujon","shujon khan ");
console.log(username);
username = username.repeat(3);
console.log(username);

let result= username.split(" ");
console.log(result);
console.log(result[0]);
console.log(result[1]);

let res= username.startsWith("shujon");
console.log(res);
if(res){
    console.log("yes"); }
else{
    console.log("no");
}
let phonenum="123-456-7890";
phonenum= phonenum.replace(/-/g,"");
console.log(phonenum);
phonenum= phonenum.padStart(15,"0");
console.log(phonenum);