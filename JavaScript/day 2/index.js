console.log("Prince Mishra");

//object create
const rectanglee = {
    length: 1,
    breadth: 2,

    draw: function() {
        console.log('draw');
    }
};


//object creation
//-factory function
// by compile time
function createRectangle(){
    return rectangle3 = {
        length: 1,
        breadth: 2,

        draw: function() {
            console.log('draw');
        }
    };
}
let rectangleobj1 = createRectangle();

//by taking input from the user
function createRectagle2(length, breadth){
    return rectangle4 = {
        length,
        breadth,

        draw: function() {
            console.log('draw');
        }
    };
}

let rectangleobj2 = createRectagle2(6, 7);
let rectangleobj3 = createRectagle2(2, 6);
let rectangleobj4 = createRectagle2(3, 6);
let rectangleobj5 = createRectagle2(45, 3);

//contructor function: jo ki method ya function ko initialize kr rha h

function Circle(){
    this.radius = 1;
    this.draw = function(){
        console.log('draw');
    }
}
//new - empty object return krta h
let CircleObj = new Circle();

//Functions are object

let Circle1 = new Function(
    'radius',
    `this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }`
);

let cir = new Circle1(4);
console.log(cir);


CircleObj.color = 'yellow';
console.log(CircleObj); 

delete CircleObj.color;
console.log(CircleObj);

let rectangle = {
    length: 2,
    breadth: 4
};
//2 types : for in and for of
//for loop - for in
for(let key in rectangle){
    //keys are reflected through key variable
    //values are reflected through rectangle[key]
    console.log(key, rectangle[key]);
}

//for of
for(let key of Object.entries(rectangle)){
    console.log(key);
}

//if else
if('length' in rectangle){
    console.log('present');
}
else{
    console.log('absent');
}

//obj clone
let src = {
    a: 10,
    b: 20,
    c:40
};

let dest = {};

for(let key in src){
    dest[key] = src[key];
}
src.a++;
console.log(dest);

//2nd way
let srcc = {
    a: 12,
    b: 23,
    c:44
};
let srcc2 = {value: 345};
let test = Object.assign({}, srcc, srcc2);

console.log(test);
src.a++;
console.log(test);

//3rd way
let srccc = {
    a: 14,
    b: 24,
    c:45
};

let destination = {...srccc};
console.log(destination);
srccc.a++;
console.log(destination);