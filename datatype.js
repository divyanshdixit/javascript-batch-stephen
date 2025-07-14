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

var obj1 = { // => key: value , 1002
    name: 'Dixit',
    age: 24,
}
var obj2 = { // 1004
     name: 'Dixit',
    age: 24,
}

var name = 'Divyansh'; // address into ram 1000
name = 'Dixit'; // 1003


var name = String('Divyansh'); 

var age = 24 // 1001


var obj3 = obj1; // 1002
console.log(obj3) ;