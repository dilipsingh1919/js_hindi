// function
 function Sayname(){
    console.log("d");
    console.log("i");
    console.log("l");
    console.log("i");
    console.log("p")
    
       
    
 }
// Sayname()

function twonumbers(number1,number2){
    console.log(number1+number2)

}
twonumbers(10,5)


function sum(number1,number2){
   // let result=number1+number2
    return number1+number2
}
const result=sum(3,6)
//console.log("result :", result);

function usermessage(username="ram"){
    if(!username){
        console.log("plz enter the username");
        return
        
    }
    return `${username} just logged in `
}
//console.log(usermessage("hitesh"))

const user={
    username:"dilip singh",
    price:"199"
}

function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price ${anyobject.price}`)
}
handleobject(user)




