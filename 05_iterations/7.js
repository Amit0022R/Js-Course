// map => Calls a defined callback function on each element of an array, and returns an array that contains the results.

// const myNumers = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNumers.map( (num) => num + 10 )
// console.log(newNums);
// [ 11, 12, 13, 14, 15,16, 17, 18, 19, 20]
    
// const myNumers = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNumers.map( (num) => { return num + 10 })
// console.log(newNums);
// [ 11, 12, 13, 14, 15,16, 17, 18, 19, 20]


const myNumers = [1,2,3,4,5,6,7,8,9,10]

// chaining
const newNums = myNumers
            .map( (num) => num * 10 )
            .map( (num) => num + 1 )
            .filter( (num) => num >= 40 )

console.log(newNums); 







