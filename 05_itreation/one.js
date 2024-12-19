

//for (let i = 1; i <=10; i++) {
   // const element =i;

   // if(i==5 ){
        //console.log("5 is best  number")
   // }
//console.log(element)
//}


/*
for (let i = 0; i<= 10; i++) {
    //console.log(`outer loop: ${i} `);
    for (let j = 0; j<= 5; j++) {
       // console.log(`ineer loop :${j} and ${i}`);
       console.log(i+'*'+j+'='+ i*j);
       
        
    }
    

    
}
*/
let myArrary=["falsh","batman","Superman"]
for (let index = 0; index < myArrary.length; index++) {
    const element = myArrary[index];
    console.log(element)
    
}

//brank and continue

for (let b = 1; b < 20; b++) {
    if (b==5) {console.log("dectecd by b")
        break 
    
        
    }
    console.log(`Value of b : ${b}`);
}

for (let b = 1; b < 20; b++) {
    if (b==5) {console.log(`dectecd by ${b}`)
        continue
    
        
    }
    console.log(`Value of b : ${b}`);
}
