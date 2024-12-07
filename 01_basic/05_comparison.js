// stsiclick check the data types and data  (===)
//console.log("2"===2)
const id= Symbol("1234")
const anotherid=Symbol("1234")

console.log(id===anotherid);

// data type 
 //permitive datatpe("string",bigNumber,Number,boolean,symbol,null,undefined)
 
 /*const name="dilip" // string
 const Number=100 //number
 const bigNumber=10023485739039n// bigint
 const score=null;// object output
 const islogin=false//boolean
 let isemail;//undefined

 console.log(typeof isemail)
 */
  //non -permitvie
  // Object,function,Array
 // Array
 /* const cars=["bmw","scorpio","verna"];
console.log(cars);
//object 
let myobject={
    name: "dilip",
  rollnumber:201,
  age:70,

}
console.log(myobject);

//function
const isfunction =function (){
    console.log("hello world");
    
 }
isfunction()
*/


// MEMORY     STACK(permitive ) AND HEAP(non-permitive)
 
let  myname = "dilip"
 let anothername = myname
anothername="vipul"

 console.log(myname);
 console.log(anothername)

 let userone={
  email: "user@gamil.com",
  upi:"dil21@ybl"
 }
 let usertwo= userone
 //usertwo.email="dilip@gamil.com"

console.log(userone.email);
console.log(usertwo.email);

 
 

