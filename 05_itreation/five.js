const coding=["jss","cpp","rubi"]
coding.forEach( function(item){
   // console.log(item)
})

//coding.forEach((item)=>{
  //  console.log(item)
//})
function printme(item){
   // console.log(item);
}
coding.forEach(printme)

coding.forEach((item,index,arr)=>{
console.log(item,index,arr)
})

const mycoding =[{
    languname :"javascript",
    langufilename:"java"
},
{
    languname:"java",
    langufilename:"javac"
},
{
    languname :"python",
    langufilename:"py"
}
]
mycoding.forEach((item)=>{
    console.log(item.languname)
})






