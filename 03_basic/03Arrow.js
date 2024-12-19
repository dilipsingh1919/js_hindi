const user= {
    username :"dilip",
    price :229,
// this key word use for current context ko access karne ke liye use hota h 
    welcomeMessage:function(){
        console.log(`${this.username} , welcome the website`)
        // console.log(this) current context show karta h 
    }

}
//user.welcomeMessage()
//user.username="ram"
//user.welcomeMessage()
//console.log(this);

// function me  this word use  nai hota
/*function chai(){
   let username="dilip"
   console.loge(this.username)
}
*/

const chai=()=>{
    let username="dilip"
    console.log(this)

}
//chai()
//arrow function 
  // const addtwo=(num1,num2)=>{
    //return num1+num2
   //}

  // use {} implicity return keyword and ()not excplitic

   //const addtwo=(num1,num2)=> num1+num2
  // const adtwo=(num1,num2)=> (num1+num2)
   //object return
   const addtwo=(num1,num2)=> ({ username:"dilip"})
   
   console.log(addtwo(4,5))

   const mynewArray=[2,7,9,0,6]
   mynewArray.forEach(()=>{});