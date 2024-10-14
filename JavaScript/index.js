console.log("Prince Kumar Mishra, Namaste Duniya4");

let a = "Prince";
let b = "Kumar";

console.log(a);
console.log(b);

if(true){
    let c = 'Baby';
    console.log(c);
}

a = true;

if(a){
    console.log("a is now boolean");
}

Person = {
    fname: "Prince",
    age: 22
}
console.log(Person.fname);
console.log(Person['age']);

let names = ['Prince', 'Kumar', "Mishra", 23];
console.log(names[0]);
console.log(names[3]);



//operators:

let a1 = 2;
let b1 = 3;

console.log("addition: ", a1+b1);
console.log("subtraction: ", a1-b1);
console.log("multiplication: ", a1*b1);
console.log("division: ", a1/b1);
console.log("Remainder: ", a1%b1);
console.log("Exponent: ", a1**b1);

console.log("pre increment: ", +a1);
console.log("Numnber is : ", a1);

console.log("post increment: ", a1++);
console.log("Numnber is : ", a1);

console.log("pre decrement: ", --a1);
console.log("Numnber is : ", a1);
console.log("post decrement: ", a1--)
console.log("Numnber is : ", a1);

console.log("pre increment: ", +b1);
console.log("Numnber is : ", a1);
console.log("post increment: ", b1++);
console.log("Numnber is : ", a1);

console.log("pre decrement: ", --b1);
console.log("Numnber is : ", a1);
console.log("post decrement: ", b1--);
console.log("Numnber is : ", a1);


//operators pre and post:
let x = 5;
let y = 10;

let ans1 = (++x) * (--y);  //54
console.log(ans1);
let ans2 = (x++) * (--y);   
console.log(ans2);          //48
let ans3 = (x++) * (y--);
console.log(ans3);          //56
let ans4 = (++x) * (y--);   
console.log(ans4);          //63


//comparison 
console.log('comparison');
console.log(3>3);
console.log(3<3);
console.log(3<=3);
console.log(3>=3);
console.log(3==3);
console.log(3===3);
console.log(3!==3);

//strict and loose equality
let num = 1;
let str = '1';
console.log('strict and loose equality');
console.log(num===str);
console.log(num==str);

//ternart operator
let age = 3;
let status = (age >= 18) ? 'I can Vote' : 'I can not Vote';
console.log(status);

//logical operator
console.log('logical operator - AND');

let agee = 18;
let VId = true;
let canVote = (agee > 18 && VId);
console.log("Can You Vote: ", canVote);

console.log('logical operator - OR');
let isWeekend = true;
let holiday = true;
let canrelax = (holiday || isWeekend);
console.log("Can you relax: ", canrelax);

console.log('logical operator - NOT');
let Weekend = false;
let work = !Weekend;
console.log("working day: ", work);

//with non-Boolean
console.log('logical operator - AND with non-Boolean');
console.log(false || "Prince");
console.log("Prince" || false);
console.log(true || "prince");
console.log("Prince" || true);
console.log(false && "Mishra");
console.log("Prince" && false);
console.log(true && "Mishra");
console.log("Mishra" && true);

//operator precedence - here hame yaad nhh krna pde precedence isliye hmlog brackets ka use krenge
m = 3;
n = 5
o = 8;
f = 4;
let k = (m + (n+o) / f);
console.log(k);

//control statement
//if else statement
let marks = 48;
if(marks >= 90){
    console.log("Grade A");
}
else if(marks >= 80){
    console.log("Grade B");
}
else if(marks >= 70){
    console.log("Grade C");
}
else{
    console.log("Grade D");
}

//switch case
let numm = 2;
switch(numm){
    case 1: console.log('A');
    break;
    case 2: console.log('B');
    break;
    case 3: console.log('C');
    break;
    default: console.log('D');
}

//LOOPS:
//For LOOP
console.log("For Loop: ")
for (let i = 0; i < 5; i++) {
    console.log(i);
}

let ne = 1;
//While LOOP
console.log("While Loop");
while(ne <= 5){
    console.log(ne);
    ne++;
}

let number = 5;
console.log("Do while: ");
do {
  console.log(number);
  number++;
} while (number <= 8);



