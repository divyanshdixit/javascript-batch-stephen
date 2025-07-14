var obj1 = { // 1000
    name: 'divyansh'
}

var obj2 = obj1; // 1000
console.log(obj2.name) //
obj2.name = 'new name'; 
console.log(obj2.name) //
console.log(obj1.name)// 

var x = 10; // 1001
var y = x; // 1002
console.log(y); // 10
y = 20 // 1003
console.log(x); // 10


