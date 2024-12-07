/*let mydate = new Date()
console.log(mydate.toString())
console.log (mydate.toDateString())
console.log (mydate.toJSON())
console.log (mydate.toLocaleDateString())
console.log (mydate.toLocaleString())
console.log (mydate.toLocaleTimeString())
console.log(typeof mydate)
*/
let mydatecreated =new Date(2023,0,24,5,3,54)
let mydatecreatede= new Date("01-14-2021")
console.log(mydatecreated.toLocaleString())
console.log(mydatecreatede.toLocaleString());

let mytimestamp= Date.now()
console.log (mytimestamp)
console.log(mydatecreated.getTime())
// convert the second
console.log(Math.floor(Date.now()/1000));


let mydar=new Date();
console.log(mydar.getDate());
console.log(mydar.getMonth())

mydar.toLocaleString('default',{
    weekday:"long",
}
)