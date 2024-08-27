// Javascript "Date" objects represent a single moment in time in a platform-independent format.

let myDate = new Date()
// console.log(myDate); // 2024-08-27T05:57:26.771Z

// console.log(myDate.toString()); // Tue Aug 27 2024 05:58:10 GMT+0000 (Coordinated Universal Time)

// console.log(myDate.toDateString()); // Tue Aug 27 2024
// console.log(myDate.toTimeString()); // 05:59:46 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toJSON()); // 2024-08-27T06:00:10.322Z
// console.log(myDate.toISOString()); // 2024-08-27T06:00:53.567Z

// console.log(myDate.toLocaleString()); // 8/27/2024, 6:01:27 AM

// console.log(typeof(myDate)); // object

// let myCreatedDate = new Date(2023, 0, 23);
// JAVASCRIPT mei Months zero se start hote hai
// console.log(myCreatedDate); // 2023-01-23T00:00:00.000Z
// console.log(myCreatedDate.toDateString()); // Mon Jan 23 2023

// console.log(myCreatedDate.toLocaleTimeString()); // 12:00:00 AM

// let myCreatedDate = new Date(2023, 0, 23, 5, 3); 
// console.log(myCreatedDate.toLocaleString()); // 1/23/2023, 5:03:00 AM

// let myCreatedDate = new Date("2024-08-27"); 
// console.log(myCreatedDate.toLocaleString()); // 8/27/2024, 12:00:00 AM

// In india we follow => "MM-DD-YYYY"
let myCreatedDate = new Date("08-27-2024"); // 8/27/2024, 12:00:00 AM
// console.log(myCreatedDate.toLocaleString()); 

let myTimeStamp = Date.now()
// console.log(myTimeStamp); // 1724739043228 in millisecond
// console.log(myCreatedDate.getTime()); // 1724716800000
// console.log(Date.now()/1000); // 1724739194.041

// console.log(Math.floor(Date.now()/1000)); // 1724739255


let newDate = new Date()
// console.log(newDate); // 2024-08-27T06:14:52.301Z

// console.log(newDate.getMonth()); // 7  (index is start from zero)

// for exactly month
// console.log(newDate.getMonth() + 1); // 8


// console.log(newDate.getDay()); // 2 (Start from Monday)

// console.log(newDate.getDate()); // 27


newDate.toLocaleString('default', {
    weekday: "long",
    
})