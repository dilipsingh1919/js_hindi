//const useremail="dilip@1919"
const useremail=[]

////if(useremail){
  //  console.log("Got user email")

//else{
    //console.log("Don't have user email")


//falsy value 
false,0,-0,BigInt ,"",null,undefined,NaN
//truthy values
"0",'false'," ",[],{},function(){}

// if(useremail.length===0){
//     console.log("Array is empty")
// }

const myobject={}
if (Object.keys(myobject).length===0){
    console.log("object empty")
    
}

// nullish coalescing operator(??):null aur undefined

//let val1;

//val1=5??10
//val1=null??10
// val1= undefined??15

//val1=null??60??20



//console.log(val1)

//ternary operator

//condition?true:false

const iceteaprice=100

iceteaprice <=80?console.log("less than 80"):console.log("more then 80")