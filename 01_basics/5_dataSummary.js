// JavaScript is a dynamic language and not static, which means that variables can hold values of different types during runtime. Unlike languages such as Typescript or Java, you don't need to declare the data type of a variable explicitly

//  Primitive
// yeah call by value hote hai
// 7 Types: String, Number, Boolean, null, undefined, Symbol, bigInt

// const score = 100
 const scoreValue = 100.3

// const isLoggedIn = false
 const outsideTemp = null
// let userEmail; // value is undefined

// const id = Symbol('123')
 const anotherId = Symbol('123')

// console.log(id == anotherId); // false

// const bigNumber =  123456790000000000n



// Reference (non-primitive)
// Array, Objects, Functions

const heroes = ["amit", "anuj", "cena"];
let myObj = {
    name: "Amit",
    age: 19,
}

 // function ko js mei ek variable ki tarah treat krskte h
 const myFunction = function() {
    console.log("HEloo World");

 }

 console.log(typeof bigNumber); // undefined
 console.log(typeof outsideTemp); // object
 console.log(typeof scoreValue); // number
 console.log(typeof myFunction); // function
 console.log(typeof heroes); // object
 console.log(typeof anotherId); // symbol
 
 // https://262.ecma-international.org/5.1/#sec-11.4.3

 /*

 Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  object
       Function  =>  function
       Object  =>  object

 */
 