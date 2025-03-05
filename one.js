let students=30;
students=students+10;
console.log(students);

students--;
console.log(students);

students=students*2;
console.log(students);

students=students/2;
console.log(students);

students=students**3; // students^3
console.log(students);

let extra_students=students%2;
console.log(extra_students);


students+=10;
students-=5;
students*=2;
students/=2;
students**=3;
extra_students%=2;


// operator precedence
//    1. ()
//     2. **
//     3. * / %
//     4. + -
//     5. = +=
//     6. ++ --



let x=10+5*2+2**3/4;
console.log(x); 
