// const userEmail = "amit@hr"

// if (userEmail) {
//     console.log("Got user email"); // print
// }
// else {
//     console.log("Don't have user email");
// }

// const userEmail = ""

// if (userEmail) {
//     console.log("Got user email"); 
// }
// else {
//     console.log("Don't have user email"); // print
// }

// const userEmail = []
// if (userEmail) {
//     console.log("Got user email"); // prints
// }
// else {
//     console.log("Don't have user email"); 
// }

const userEmail = []
if (userEmail) {
    console.log("Got user email"); // prints
}
else {
    console.log("Don't have user email"); 
}

// fasly values :-
//  false , 0 , -0 , BigInt 0n , "" , null , undefined , NaN  

// truthy values :- 
// "0" , 'false' , " " , [] , {} , function(){} 

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// false == 0 is true
// false == '' is true
// 0 == '' is true

 
// Nullish Coalescing Operator (??): null undefined

let val1;
val1 = 5 ?? 10

console.log(val1); // 5
