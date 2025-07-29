console.log('datatypes')
// primitive => (
// can not be change / immutable, => reference/address not for value
//  they don't have their own props and methods
// ) 

// string
// number
// boolean
// undefined

var x = 10;

console.log(typeof x);

// non-primitive =>  (
// can be change/mutable, 
// they have own props and methods)

// object
// null => object
// array => this is special kind of object


var a; // declare
console.log(a) // undefined
a = 10; // defintion
console.log(a); // 10

var a = 10; // 1000

a = 20; // 1002

var person = { // 1100
    name: "divyansh",
    city: "noida",
    age: 28,
}

var person = { // 1100
    name: "divyansh",
    city: "noida",
    age: 29, // we have changed the value here at same address/reference
}



