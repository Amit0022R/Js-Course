// **************************num*********************************

// const score = 400
// console.log(score); // 400


// const balance = new Number(100)
// console.log(balance); // [Number: 100]

// console.log(balance.toString()); // 100
// console.log(balance.toString().length); // 3
// console.log(balance.toFixed(1)); // 100.0
// console.log(balance.toFixed(2)); // 100.00
// console.log(balance.toFixed(3)); // 100.000

// const otherNumber = 23.8966

// console.log(otherNumber.toPrecision(3)); // 23.9
// precision — Number of significant digits. Must be in the range 1 - 21, inclusive.

// const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(3)); // 124

// const otherNumber = 1123.8966

// console.log(otherNumber.toPrecision(3)); // 1.12e+3

//  const otherNumber = 123.8966

//  console.log(otherNumber.toPrecision(4)); // 123.9

//  const hundreds = 1000000
// //  console.log(hundreds.toLocaleString()); // 1,000,000
// console.log(hundreds.toLocaleString('en-IN')); // 10,00,000


// **************************math*******************************

// console.log(Math); // Object [Math] {}

//  console.log(Math.abs(-4)); // 4 -> -ve => +ve
//  console.log(Math.round(4.3)); //4
//  console.log(Math.round(4.6)); //5
//  console.log(Math.ceil(4.6)); //5
//  console.log(Math.ceil(4.2)); //5
//  console.log(Math.floor(4.2)); //4
//  console.log(Math.floor(4.9)); //4
//  console.log(Math.min(4, 3 , 6)); // 3
//  console.log(Math.max(4, 3 , 6)); // 6

// console.log(Math.random); // [Function: random]
// console.log(Math.random()); // 0.5765281947228731
// console.log(Math.random()*10); // 2.3249170065811864
// console.log(Math.random()*100); // 62.91754180792783
// console.log(Math.random()*1000); // 771.1534910317852

// console.log(Math.random()*10 + 1); // 8.329210470889791
// + 1 krne se minimum value 1 ayegi naaki zero

// console.log((Math.random()*10) + 1); // 4.322201170520076
//  console.log(Math.floor(Math.random()*10) + 1); // 2

const min = 10
const max = 20

console.log(Math.random() * (max - min + 1)); // 8.86235465825824

console.log(Math.floor(Math.random() * (max - min + 1)) + min); // 10

