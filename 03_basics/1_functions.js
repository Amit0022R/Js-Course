// console.log("H");
// console.log("I");
// console.log("T");
// console.log("E");
// console.log("S");
// console.log("H");


// function sayMyName() {
//     console.log("H");
//     console.log("I");
//     console.log("T");
//     console.log("E");
//     console.log("S");
//     console.log("H");
// }

// sayMyName() => execution
// sayMyName = > Reference
// sayMyName() // it will print all things in sayMyName function

// function mei input ko parameter
// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2)
// }
// when function ko call krate hai tab usme value pass krate hai usse argument kehte h

// addTwoNumbers() // NaN
// addTwoNumbers(51,49) // 100
// addTwoNumbers(51,"49") // 5149
// addTwoNumbers("51", "49") // 5149
// addTwoNumbers(51,"a") // 51a
// addTwoNumbers(51, null) // 51 

//  function addTwoNumbers(number1, number2) {
//      console.log(number1 + number2)
//  }
//  const result = addTwoNumbers(99,1)
//  console.log("Result:",result); // Result: undefined


// function addTwoNumbers(number1, number2) {
    
    // let result = number1 + number2
    // return result;
    // console.log("Amit's"); // this never print , if log ko return se phle execute krege tbhi print hoga
    
    // return number1 + number2
// }

// const result = addTwoNumbers(99,1)
// console.log("Result:",result); // Result: 100

// function loginUserMessage(username) {
//     return `${username} just logged in`
// }

// loginUserMessage(AMit) // error
// loginUserMessage() // error
// console.log(loginUserMessage("Nikki Bella")) // Nikki Bella just logged in

// console.log(loginUserMessage("")) // just logged in

// console.log(loginUserMessage()); // undefined just logged in


// function loginUserMessage(username) {
//     if(username === undefined){
//         console.log("username toh likh ladle!!");
//         return    
//     }
//     return `${username} just logged in`
// }
// console.log(loginUserMessage()); // username toh likh ladle!!


function loginUserMessage(username = "Amit") {
    if(!username){ // equivalent to username === undefined
        console.log("username toh likh ladle!!");
        return    
    }
    return `${username} just logged in`
}
console.log(loginUserMessage()); // Amit just logged in
// if 84 mei kuch pass kroge toh wo username ko overwrite krdegi


























