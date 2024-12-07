const mysym=Symbol ("key1")


const user={
    name:"dilip",
    "full name":"dilipsinghchauhan",
    age:18,
    [mysym]:"key1",
    location:"jaipur",
    email:"dilipchahuan1929",
    islogdin: false,
    lastlogin:["Monday","Saturaday","wensday"]

}
console.log(user.email)
console.log(user["email"])
console.log(user["full name"])
console.log(typeof user[mysym])



user.name="ram"
console.log(user.name)

// Object.freeze(user)
user.name="vinod"

console.log(user.name)
console.log(user)

user.greating = function(){
    console.log("hello world")
}
console.log(user.greating());

user.greatingtwo=function(){
    console.log(`hello what ${this["full name"]} up youre ${this.age}`);
}
console.log(user.greatingtwo())
