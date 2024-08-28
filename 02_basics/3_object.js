// singleton
  
// object literals

const mySym =Symbol("key1")

const JsUser = {
    name: "Amit",
    "full name": "Amit Ranga",
    [mySym]: "mykey1",
    age: 19,
    location: "Bhiwani",
    email: "Amit@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

// object access
// console.log(JsUser.email) // Amit@google.com
// console.log(JsUser["email"]) // Amit@google.com
// console.log(JsUser["full name"]) // Amit Ranga
// console.log(JsUser[mySym]); // mykey1

// JsUser.email = "Anuj@2004.com"
// Object.freeze(JsUser)
// JsUser.email = "Anuj@20033.com"
//  console.log(JsUser);

 JsUser.greeting = function() {
    console.log("Hello Js user kaise ho");
    
 }

 JsUser.greetingTwo = function() {
    console.log(`Hello Js user kaise ho, ${this.name}`);
    
 }

 // console.log(JsUser.greeting); // undefined
console.log(JsUser.greeting()); // Hello Js user kaise ho
console.log(JsUser.greetingTwo()); // Hello Js user kaise ho, Amit










