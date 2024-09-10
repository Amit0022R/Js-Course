// for of loop
// for (const element of object) {
// }


// const arr = [1,2,3,4,5]

// for (const num of arr) {
//       console.log(num);
// }


// const greetings = "Hello World!"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`);   
// }

    
// MAPS --> The Map object holds key-values pair and remembers the original insertion order of the keys , also Map is known for unique values
 
const map = new Map() 
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")

// console.log(map);

//  for (const key of map) {
//     console.log(key);
// }

for (const [key, value] of map) {
    // console.log(key, ':-', value );
}

const myObject = {
    game1 : 'NFS',
    game2 : 'Cricket',
    game3 : 'Football'
 }

for (const [key, value] of myObjectObject) {
    console.log(key, ':-', value );   
    // error -> myObject is not iterable 
}






































