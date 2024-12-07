// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}
//console.log(regularUser)

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

//const obj3 =Object.assign(obj1,obj2)

//console.log(obj3)

const obj3={...obj1,...obj2}

//console.log(obj3)

const user=[
    {
        id: 1,
        email:"h@gmail"
    },
    {

    }
    ,{

    }
    ,{

    }


]
user[1].email
console.log(tinderUser)
console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))
console.log(tinderUser.hasOwnProperty("isLoggedin"))


const course={
    coursename:"js hindi javascript",
    courseprice:"999",
    courseInstuorc :"dilip"
}
 const {courseInstuorc:instuorc }=course

 console.log(instuorc);
 