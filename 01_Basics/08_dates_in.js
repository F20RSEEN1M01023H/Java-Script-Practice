// Dates 

const myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());

// let myCreatedDate = new Date(2025 ,2 ,4)
let myCreatedDate = new Date(2025 ,2 ,4)
// console.log(myCreatedDate.toDateString());


let myTimeStamp= Date.now()
console.log(myTimeStamp.toLocaleString());
console.log(myCreatedDate.getTime());

let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth()+1);

console.log(newDate.toLocaleString('default',{weekday:"long",month:"2-digit"}));


