 // IIFE => IMMEDIATELY INVOKED FUNCTION EXPRESSIONS
// global scope ke solution se problem hoti hai kai baar toh uss global scope ke variable hai jo bhi waha declaration hai uske pollution ko hatane k lie humne iife ka use kia h

// function chai() {
//     console.log(`DB CONNEcTED`);  
// } () // throws => error

(function chai() {
    // named IIFE
     console.log(`DB CONNEcTED`);  
 })();

// ( function audi()  {
//     console.log(`DB CONNECTED 2`);
// } ) ()

(  (name) => {
    console.log(`DB CONNECTED 2 ${name}`);
} ) ('Nikki BElla')