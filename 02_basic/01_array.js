const myarr= [1,2,3,4,5,]
console.log(myarr)

const myarr2=new Array(1,2,3,4,5,)
console.log(myarr2)

myarr.push(9)

console.log(myarr)
myarr2.pop()
console.log(myarr2)
myarr.unshift(67)
console.log(myarr)


const n1=myarr.slice(1,3)
console.log("A",myarr);
console.log(n1);

console.log("B",myarr)

const n2=myarr.splice(1,3)
console.log("c" ,myarr)
console.log(n2)


