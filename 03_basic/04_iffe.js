// Immediately Invoke function expression(Iffe) global scope ke palustion se problem hoti h kahi bhar to use hatane ke liye iife ka use karte h
(function chai(){
    console.log(`db connected`)

})
();
((name)=>{
    console.log(`db connected two  ${name}`)
})
("dilip")
