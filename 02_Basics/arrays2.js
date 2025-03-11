const marvel_heros=["Hammad","Superman","Batman"]

const dc_heros=["spiderman","Thor","Hammad"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
// console.log(marvel_heros[3]);
// console.log(marvel_heros[3][1]);

// const marvel_new=marvel_heros.concat(dc_heros)
// console.log(marvel_new);

// ********spread method
// const marvelNew = [...marvel_heros, ...dc_heros];
// console.log(marvelNew);

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array=another_array.flat(Infinity)

// console.log(real_another_array);

// console.log(Array.isArray("Hammad"));
// console.log(Array.from("Hammad"));
// console.log(Array.from({name:"Hammad"})); //Interesting 

let score1=100
let score2=200
let score3=300
let score4=400
let score5=500

console.log(Array.of(score1,score2,score3,score4,score5));
