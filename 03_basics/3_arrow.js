const user = {
    username: "Amit",
    price: 9912,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome sir!!`);
        
        // console.log(this); // current values ki baat krta hai 
        
    }


}

// user.welcomeMessage()
// user.username = "Mia Ji"
// user.welcomeMessage()


// console.log(this); // {}

// function chai() {

//     let username = "Amit"
//     console.log(this.username); // undefined
    
// }
// chai()

// const chai = function() {
//     let username = "Mia ji"
//     console.log(this.username); // undefined
// }
// chai()


    const chai = function() {
    let username = "Mia ji"
     console.log(this.username); // undefined
 }

 chai()
 




