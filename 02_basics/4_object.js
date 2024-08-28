// const tinderUser = new Object() // singleton object
// console.log(tinderUser); // {}

const tinderUser = {} // non-singleton object
tinderUser.id = "123abc"
tinderUser.name = "Amit"
tinderUser.isLoggedIn = false


// console.log(tinderUser);

const regularUser = {
    email: "someone@gmil.com",
    fullname: {
        userfullname: {
            firstname: "Amit",
            lastname: "Ranga"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname); // Amit

// console.log(regularUser.fullname.userfullname.firstname);

// keys is number and value is strings
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1, obj2} // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

// Assign => Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.
// const obj3 = Object.assign(obj1,obj2) // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// const obj3 = Object.assign({}, obj1,obj2) //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
// target is {} and source is obj1 and obj2

const obj3 = {...obj1, ...obj2} // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
console.log(obj3);


const users = [
    {
        id: 1,
        email: "ami@mgil.com"
    },
    {
        id: 1,
        email: "ami@mgil.com"
    },
    {
        id: 1,
        email: "ami@mgil.com"
    }
]

console.log(users[1].email) // ami@mgil.com

console.log(tinderUser); // { id: '123abc', name: 'Amit', isLoggedIn: false }

console.log(Object.keys(tinderUser)); // [ 'id', 'name', 'isLoggedIn' ]
// In above output datatpe is array

console.log(Object.values(tinderUser)); // [ '123abc', 'Amit', false ]

console.log(Object.entries(tinderUser)); // [ [ 'id', '123abc' ], [ 'name', 'Amit' ], [ 'isLoggedIn', false ] ]
 

console.log(tinderUser.hasOwnProperty('isLoggedIn')); // true
console.log(tinderUser.hasOwnProperty('isLogged')); // false









