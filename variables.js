// var => global scope variable , we can re-declare it => ES5
// let, const => block scope variable, we can't redelcare it into same scope => ES6

// don't use number, (-) like 1name, first-name

/* var keyworld 

var fname = 'divyansh';
var Fname = "different var";

console.log(fname)

for(var i=0; i<3; i++){
    console.log(i)
}
console.log(Fname, fname)

function sum(x, y){
    console.log(x + y)
}

sum(2,3);

fname = "new value"
console.log(fname)

*/


// document.getElementById('fname').innerHTML = "<span> Hello </span> World"

// let, const => block scope variable

// let fname = "divyansh";
// console.log(fname);

// for(var i=0; i<3; i++){
//     console.log(i)
// }
// console.log(fname)

// function sum(x, y){
//     console.log(x + y)
// }

// sum(2,3);

// fname = "new value 2"
// console.log(fname);

var fname = "divyansh";
// declartion , defintion 


// re-declare with var key word
var fname = "new value"
console.log(fname); // divyansh

// let lname = "first";
// console.log(lname);
// let lname = "second"; // that will gives error 

{
    let lname = "second";
    console.log(lname);
}

{
    let lname = "third";
    console.log(lname);
}

// console.log(lname);

for(var i=0; i<3; i++){
    console.log(i)
}
console.log(i) // undefind

// let f= 10;

let f; // decl
f = 10; // defin
f =20;

const g = 20;
g = 30;
console.log(g)