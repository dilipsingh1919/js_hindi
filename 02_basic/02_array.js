const myheros= ["shakitman","thor","marvel"]
const  dcheros=["superman","flashman","batman"]
//myheros.push(dcheros)

 const myallheros= myheros.concat(dcheros)
console.log(myallheros)

const myandheros= [...myheros,...dcheros]
console.log(myandheros);


const anthorarry=[1,2,3,[4,5,6],[7,8],9]
const realarray=anthorarry.flat(Infinity)

console.log(realarray)

console.log(Array.isArray("3"));
console.log(Array.from("dilip"));
console.log(Array.from({name :"dilip"}));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));