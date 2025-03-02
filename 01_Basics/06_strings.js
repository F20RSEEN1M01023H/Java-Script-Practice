const name="hammad"
const nameCount=6

// console.log(name + nameCount)
// console.log(`my name is ${name} and my name count is ${nameCount}`);

const gameName=new String('Hammad Ashraf')

// console.log(gameName [0]);
// console.log(gameName.__proto__);

// console.log(gameName.toUpperCase());
// console.log(gameName.length);
// console.log(gameName.charAt(5));
// console.log(gameName.indexOf('m'));


const newString = gameName.substring(0,6)
// console.log(newString);
const anotherString =gameName.slice(0,-5)
console.log(anotherString);

const newStringOne="    hammad   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url="https://hammad%20choudharry"
console.log(url.replace('%20','-'));
console.log(url.includes('hammad'));
