// js hoisting:

// hoisting // TDZ(temporal dead zone)

// var x = 10;
// console.log(x); // 10


/*

function declarations (regular function), function expression

function declarations will fully hoisted (fuc name and with fun body) to the top of scope

for function expression(with var) => works as same like variable with var keyword => undefined (not a function error)
for function express (with let and const) => (<funcName> is not defined)

hoist (exits) only for declration at the top of scope and then it is initialized by undefined value => var
hoist the declaration at the top (exits) and it is not initalized (temporal dead zone)
(let, const, var) => are hoisted in js but therir init behaviour is different.

class declaration/ class expression 

- class declaration => are hoisted by name only , just like let const but not initalized immediately, so they are in TDZ. (cant not access "class" before init)
- class expression => for let const and var it will work same as variable but the error in var case (<className> is not a constructor)

*/

console.log(a);
var a;
a = 10;

// var a; // undefined
// console.log(a); // undefined
// a =10;
// console.log(a) // 10


console.log(b); // RE
let b = 10; 

// function declartion 
function sum1(){
    console.log('first')
}

// function expression;
console.log(sum()) // undefined
var sum = function(){ // anonymous 
    console.log('first')
}

console.log(a); // undefined
var a = 10;

sum2(); // first
function sum2(){ // regular func / fun declaration
    console.log('first')
}

// class declartion / regualar class
var c1 = new Car();
class Car {
    constructor(){
        this.model = "xv";
        this.year = 2025;
    }
}

var c1 = new Car();
console.log(c1) // Car { model: 'xv', year: 2025


// class expression => unnamed, named
var Car = class {
    constructor(){
        this.model = "xv";
        this.year = 2025;
    }
}

