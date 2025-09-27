// callback

console.log('first')
setTimeout(() => {
    console.log("hello"),
    setInterval(() => {
        console.log("hi")
    }, 2000)
}, 0)
console.log('second')

// event loop : call stack => setTimeout , cb, event queue => cb
// web apis, browser kernel => new thread, libuv

// callback hell
// promise
// nested then
// async await => shorter version of promise, synch behaviour
//  

async function sum(){
    console.log('first')
    await new Promise((resolve, reject) => { resolve("hello") });
    console.log('second')
    return 1;
}

Promise.all()
sum.then((res) => console.log(res)) // 1

String.trim()  
String.toLowerCase()
String.prototype.custom = function(){
    return this.split('').reverse().join('');
}

'divyansh'.custom// 'hsnayvid'