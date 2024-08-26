const name = "Amit"
const repoCount = 50

// console.log(name + repoCount + " Value"); // Amit50 Value

// console.log(`Hello my name is ${name} and my rep count is ${repoCount}`);
// Hello my name is Amit and my rep count is 50

// const gameName = new String('AmitK')

// console.log(gameName[0]); // A
// console.log(gameName.__proto__); // {}

// console.log(gameName.length); // 5
// console.log(gameName.toUpperCase()); // AMIITK
// console.log(gameName.charAt(2)); // i
// console.log(gameName.indexOf('t')); // 3

// const gameName = new String('Amit-Ku')
// const newString = gameName.substring(0, 4) // 4 is excluded
// console.log(newString); // Amit

// const anotherString = gameName.slice(-5,4)
// console.log(anotherString); // it

// const newStringOne = "  Amit  "
// console.log(newStringOne); //  Amit -> starting and last mei space hega
// console.log(newStringOne.trim());// Amit -> starting mei space nhi hega


const url = "https://htmd.com/jjt2j%20amit"

console.log(url.replace('%20', '-')) // https://htmd.com/jjt2j-amit

console.log(url.includes('amit')) // true

const gameName = new String('Amit-Ku-com')
console.log(gameName.split('-')); // [ 'Amit', 'Ku', 'com' ]
