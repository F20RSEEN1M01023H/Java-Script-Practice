// Objects 
// Singleton
// Object.create------Construtor k through and gives singleton

// Objects Litterals 
const mySym =Symbol("key1")

const jsUser ={name:"Hammad",
    Education:"BS Software Engineering",
    Age:18,
    [mySym]:"mykey1",
    email:"hammad@gmail.com",
    isLoggedIn:false,
    LastLoggedInDays:["monaday","saturday"]}

// console.log(jsUser.Age);
// console.log(jsUser["email"]);
// console.log(jsUser[mySym]);
// console.log(typeof[mySym]);

jsUser.email="hammadchatgpt@gmail.com"
// Object.freeze(jsUser)
jsUser.email="hammadengineer@gmail.com"

console.log(jsUser);

jsUser.greetings = function(){
    console.log("Hello,I am Hammad")
}
jsUser.greetingsTwo = function(){
    console.log(`Hello,I am Hammad, ${this.name}`)
}
console.log(jsUser.greetings());
console.log(jsUser.greetingsTwo());



