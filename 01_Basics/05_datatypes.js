// 1. primitive

// 7 types : string , number , null , boolean , undefined , symbol , BigInt
// symbol: for uniuqeness


const score=100;
const scoreValue=125.5;

const isLoggedIn=false;
const outsideTemp=null;
let userEmail; 
// This is UserEmail is Undefined because not declared 

const id=Symbol('123')
const anotherId=Symbol('123')

// console.log(id == anotherId);

const BigNumber=546737846288424894n;
// console.log(typeof BigNumber)



// 2.Refrence (non permitive)

// Array , Objects,Function
// this is tye array :
const heros=["Hammad","Awais","Sherry","Usman"];

// this is the objects :
let talbleObj={
    name:"hammad",
    age:23,
}

// this is our function 
const myFunction = function(){
    console.log("Hello World");

}

console.log(typeof outsideTemp);


