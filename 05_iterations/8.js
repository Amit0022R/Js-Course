// Map => Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

// const myNums = [1,2,3]

// const myTotal = myNums.reduce( function (acc, currval) {
//     return acc + currval;
// }, 0 ) 
// console.log(myTotal); // 6


// const myNums = [1,2,3]
// const myTotal = myNums.reduce( function (acc, currval) {
    // console.log(`acc: ${acc} and currval: ${currval} `);
    // return acc + currval;
// }, 0 ) // accumulator ko comma ke baad jo bhi value dete ho wo ajaati hai
// console.log(myTotal); 
// acc: 0 and currval: 1 
// acc: 1 and currval: 2 
// acc: 3 and currval: 3 
// 6


// const myNums = [1,2,3]
// const myTotal = myNums.reduce( (acc, currval) => acc+currval , 0 )
// console.log(myTotal); 


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python course",
        price: 999
    },
    {
        itemName: "ui-ux course",
        price: 4999
    },
    {
        itemName: "data scientist course",
        price: 12999
    }
]

// below item denotes every object
const priceToPay = shoppingCart.reduce( (acc,item) => acc + item.price , 0 )
console.log(priceToPay);


