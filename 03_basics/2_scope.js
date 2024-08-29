// let a = 10
// const b = 20
// var c = 30

// if ke ander block scope and uske bahar global scope

// if(true) {
//     let a = 10
//     const b = 20
//     var c = 30
// }
// console.log(a); // a is not defined
// console.log(b); // b is not defined
// console.log(c); // 30


// let a = 300
// if(true) {
//          let a = 10
//          const b = 20
//          console.log("INNER:", a); // INNER:  10
         
//     }
// console.log(a); // 300


// Nested Loops => In this child can access parent's variable

function one() { // two can access one's variable
    const usrname = "amit"

    function two() {
        const website = "youtube"
        console.log(usrname);
        
    }
    // console.log(website); // error
    
    two()

}

//one()


if (true) {
    const username = "Brock lesnaR"

    if(username === "Brock lesnaR") {
        const website = " youtube"
        // console.log(username + website); // Brock lesnaR youtube
    }
    // console.log(website); // error
}
// console.log(username); // erro


//*****************INTRESTING................. */


console.log(addone(99))
function addone(num) {
    return num + 1
}


// below not work coz niche declare krne ke sath ek variable mei hold bhi kiya hai
console.log(addTwo(5))
const addTwo = function(num) {
    return num + 2
}


