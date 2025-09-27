// map, filter, forEach reduce , find, findIndex
const numbers = [1, 2, 3, 4, 5];

numbers.reduce((acc, curr) => {
    return acc + curr; 
}, 0); // 15

numbers.filter((num) => num > 2); // [3, 4, 5]

const res = numbers.map((num) => {
    num * 2
    return num; // [1, 2, 3, 4, 5]
}); // [2, 4, 6, 8, 10]
console.log(res)

const res1 = numbers.forEach((num) => {
    console.log(num)
    return num; // undefined
}); // 1 2 3 4 5

console.log(res1)