const marvel_heroes = ["thor", 'Ironman', "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

// marvel_heroes.push(dc_heroes)
// push hai wo existing array par push krta

// console.log(marvel_heroes); // [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// console.log(marvel_heroes[3][1]); // flash


// marvel_heroes.concat(dc_heroes)
// console.log(marvel_heroes); // [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// concat => Combines two or more arrays. This method returns a new array without modifying any existing arrays. also concat return new array



// marvel_heroes.concat(dc_heroes)
// console.log(marvel_heroes); // [ 'thor', 'Ironman', 'spiderman' ]


// const allHeroes = marvel_heroes.concat(dc_heroes)
// console.log(allHeroes); // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]


const all_new_hero = [...marvel_heroes, ...dc_heroes]
// ... ise lagane ab array nhi rha wo inidvidual element ban gya h

// console.log(all_new_hero); // [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const another_array = [1,2,3, [4,5,6] , 7, [6,7, [4,5]]]
// flat => Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth.
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array); // [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]


// when we do data scapping , jab data select krte hai kisi web page se toh wo kai baar alag format mei aata hai jaise node lsit, object, stirng etc. but chaiye toh array toh array ke upr loop kr skte h


// console.log(Array.isArray("AMit")) // false

console.log(Array.from("AMit")) // [ 'A', 'M', 'i', 't' ]
console.log(Array.from({name: "Amit"})) // [] => gives empty array


let score1 = 100
let score2 = 200
let score3 = 300
// of => Returns a new array from a set of elements.
console.log(Array.of(score1, score2, score3)); //[ 100, 200, 300 ]














 