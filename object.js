// object litreals => {}
// create object => 
// blueprint => function 

let obj = {
    // props => key : value
    name: 'divyansh',

    // methods => function
    // getName: function(){
    //     console.log(this.name);
    // }
}
// ['div', 28, {}, []] = special kind of object in js 

let personDetails = {
    name: 'div',
    age: 28,
    city: 'noida',
}

let name = "div";
// console.log(Object.prop)

// reading prop name from object
console.log(personDetails.name) // div
console.log(personDetails) // 28

// adding new prop from outside
personDetails.salary = 20;
personDetails.color = 'fair';
console.log(personDetails)

// update prop value:
personDetails.age = 30;
console.log(personDetails)

// delete prop:
delete personDetails.name
console.log(personDetails)

personDetails.name = "div";
console.log(personDetails)


