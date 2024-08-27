// const myArr = [] => square brackets
// const myArr = () => parenthisis
// const myArr = {} => curly braces

const myArr = [0, 1, 2, 3, 4, 5]
const myheroes = ["amit", "anuj", "thanso", "baby"]

const myArr2 = new Array(1,2,3,4,5)
// console.log(myArr[0]); // 0
// console.log(myArr[1]); // 1


// Array Methods

// myArr.push(6)
// console.log(myArr); // [0,1,2,3,4,5,6]
// myArr.push(7)
// console.log(myArr); // [0,1,2,3,4,5,6,7]
// myArr.pop()
// console.log(myArr); // [0,1,2,3,4,5,6]

// myArr.unshift(0)
// console.log(myArr); // [0,0,1,2,3,4,5]

// myArr.unshift(9)
// console.log(myArr); // [9,0,1,2,3,4,5]

// myArr.unshift(9)
// myArr.shift()
// console.log(myArr); // [ 0, 1, 2, 3, 4, 5 ]

// myArr.shift() // orginal myArr => [0, 1, 2, 3, 4, 5]
// console.log(myArr); // [1, 2, 3, 4, 5 ]

// console.log(myArr.includes(9)); // false
// console.log(myArr.includes(5)); // true

// console.log(myArr.indexOf(9)); // -1
// console.log(myArr.indexOf(4)); // 4

// Join => Adds all the elements of an array into a string, separated by the specified separator string.

// const  newArr = myArr.join()
// console.log(myArr); // [ 0, 1, 2, 3, 4, 5 ]
// console.log(newArr); //  0,1,2,3,4,5
// console.log(typeof newArr); // string


// slice, splice

console.log("A ", myArr); // A  [ 0, 1, 2, 3, 4, 5 ]
// Slice ==> Returns a copy of a section of an array
const myn1 = myArr.slice(1,3) // 3 ko include nhi krna

console.log(myn1); // [ 1, 2 ]
console.log("B ", myArr); // B  [ 0, 1, 2, 3, 4, 5 ]

const myn2 = myArr.splice(1,3) // 3 include hoga isme
console.log("C ", myArr); //C  [ 0, 4, 5 ],,,, HERE!!! splice ne original array hi change krdi
console.log(myn2); // [ 1, 2, 3 ]

