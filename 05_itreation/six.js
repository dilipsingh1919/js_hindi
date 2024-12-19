const coding=["jss","cpp","rubi","java","py"]
 const result = coding.forEach((item)=>{
    console.log(item)

    
})
//console.log(result)


const mynums=[1,2,3,4,5,6,7,8,9,10]
  //const Newnums=mynums.filter((num)=> num> 4)
  //const Newnums=mynums.filter((num)=>{
    // return num>4


 //   const Newnums=[]
 //   mynums.forEach((num)=>{
    //    if(num>4){
          //  Newnums.push(num)
     //   }
   // })
   // console.log(Newnums)

   const books=[{
    title:'book',gen :'fiction',publish :'1982',edition:"2002"
   },
   {
    title:'book two',gen :'Non-fiction',publish :'1984',edition:"2004"
   },
   {
    title:'book there',gen :'fiction',publish :'1987',edition:"2007"
   },
  { title:'book-four',gen :'fiction',publish :'1990',edition:"2010"
  }
 ]

 let userbooks= books.filter((bk)=>bk.gen==="fiction")
 userbooks=books.filter((bk)=> {return bk.edition> 2002})
    console.log(userbooks);
 
