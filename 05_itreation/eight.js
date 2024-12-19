//reduce
const mynums=[1,2,3,4]
 const Newnums= mynums.reduce((acc,cul)=>{ return acc+cul },0)
 console.log(Newnums)


 const shopingcart=[
    {
        itemName:"java",
        price:2999,

    },
    {
        itemName:"python",
        price:3999,
        
    },
    {
        itemName:"js",
        price:4999,
        
    },
    {
        itemName:"mobile",
        price:5999,
        
    },

 ]
  const Price_to_pay =shopingcart.reduce((acc,item)=>acc+item.price,0)

  console.log(Price_to_pay)