let a = 30;
const b= 20;
var c=40;

if(true){
    let a =100
     var c=60
 console.log("linear :", a)
}
console.log(a)
console.log(c)


function one(){
    const username="dilip singh"

    function two(){

        const website ="youtube"
        console.log(username)


    }
    two()
     // console.log(website)
}
one()

if(true){
    const username= "dilip"
    if(username==="dilip"){
        const website="youtube"
        console.log(username+website)
    }
    //console.log(website)
}
//console.log(username);


// intersrting concept
console.log(addone(5))
function addone(value){
    return value+1;
}

// declaration se pahle  access nai kar sakte hai  es type se jab function declar karte h 
console.log(addtwo(6))
 
const addtwo= function(value){
    return value+2;
}