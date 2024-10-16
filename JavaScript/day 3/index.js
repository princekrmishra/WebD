console.log("Prince Kumar Mishra - JS Day 3");

let lastName = 'Mishra';

let firstName = new String('Prince Kumar');

let message = ' This is \n my First \n message';
console.log(message);
let word = message.split(' ');
console.log(word);

//template literal

let message2 = `Hello ${lastName} this is 
my first
message`;

console.log(message2);

//date and time
let date = new Date();
console.log(date);

let date2 = new Date('April 29 2002 02:00');
console.log(date2); 

let date3 = new Date(2002, 3, 29, 2);
date3.setFullYear(2003);
console.log(date3);

//arrays:
let Number = [1, 4, 5, 7];

console.log(Number); 
console.log(Number[3]);
//insertion at end
Number.push(9);
console.log(Number); 
//insertion at beginning
Number.unshift(8);
console.log(Number);
//insertion at middle
Number.splice(2, 0, 'a', 'b ', 'c');
console.log(Number);

//searching
console.log(Number.indexOf('c'));
console.log(Number.includes('c'));
console.log(Number.indexOf(12, 3));
let coursers = [
    {no:1, naam:'Prince'},
    {no:2, naam:'Kumar'}
];
console.log(coursers);
console.log(coursers.indexOf({no:1, naam:'Prince'})); //ye nhi h shi tarika
//1st Way
let course1 = coursers.find(function(course1){
    return course1.naam == 'Kumar';
})
console.log(course1);
//2nd way
let course = coursers.find(course => course.naam == 'Prince');
console.log(course);
//removing element
let Numbers = [1,2,4,5,6,7,8,3];
//-at starting
Numbers.shift();
console.log(Numbers);
//-at ending
Numbers.pop();
console.log(Numbers);
//-at middle
Numbers.splice(3,1);
console.log(Numbers);

//emptying an array
let aray = [1,2,3,4,5];
let no = aray;
aray = [];
console.log(aray); 
console.log(no);  //yha to exist kr rhi h isliye ye glt h

//isliye ika correct way aise hota h
let arr = [1,2,3,4,5];
let n = arr;
arr.length = 0;
console.log(arr);
console.log(n); 

//ek or way:
let a = [1,2,3,4,5];
let nn = a;
a.splice(0, a.length);
console.log(a);
console.log(nn);

//combining and slicing arrays:
let First = [1,2,3,4,5];
let Second = [6,7,8,9,10];

let combining = First.concat(Second);
console.log('Combined array is - ', combining);

let sliced = combining.slice(2,4); 
//4th index is excluded
//agr last value nhi denge to first index k bad k sare element print ho jayenge
//agr slice function m koi value nhi pass krenge to to puri array print ho jayegi (original array ki copy called full slicing)
console.log('sliced array is - ', sliced);
//combinig and slicing in object - hw


//spread operator
let a1 = [1,2,3,4,5];
let a2 = [6,7,8];
let com = [...a1,'a',...a2,'b', true];
console.log(com);
let another = [...com];
console.log(another);

//iterating an array
let arrr = [10,20,30,40,60];

for (let value of arrr){
    console.log(value);
}

arrr.forEach(function(num){
    console.log(num);
})
//forEach() method is used to execute a function on each element of an array.

//for each in another way
arrr.forEach(numm => console.log(numm) );

//joining array
let arrrr = ['a','b','c','d'];

const joined = arrrr.join(',');
console.log(joined);
//split
let me = "This is my first message"
const split = me.split(' ');
console.log(split)
let join = split.join('_');
console.log(join);

//sorting arrays:
let unsorted = [2,5,7,3,1,-3,0];
unsorted.sort();
console.log(unsorted);
unsorted.reverse();
console.log(unsorted);

//filtering arrays:
let nnn = [1,2,-3,-5];

let filtered = nnn.filter(function(value){
    return value < 0;
});
console.log(filtered); 

//in arrow 
let filter = nnn.filter(value => value >= 0);
console.log(filter); 

//mapping arrays:
let mmm = [1,2,3,4,5];

let item = mmm.map(function(value){
    return 'student_no' + value;
})
console.log(item);
//mapping with object
let bacche = [
    {no:1, naam:'Purwa'},
    {no:2, naam:'Kumari'}
];
let mapped = bacche.map(value => 'student_no' + value);
console.log(mapped);

let nuu = [1,2,-6,-9];
let filteritem = nuu.filter(valuee => valuee >= 0);

let itemm = filtered.map(function(numm){
    return {valuee: numm};
})
console.log(itemm);