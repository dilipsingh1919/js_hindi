// for of
const arr=[1,2,3,4]
for (const val of arr) {
    console.log(val)
    
}
const gratting ="hello world!"
for (const great of gratting) {
    console.log(`each charset ${great}`)
    
}
// map uniquce value
const map =new Map()
map.set("IND","INDIA")
map.set("USA","UNATITED STATE OF AMERICA")
map.set("FR","FRANCH")

console.log(map)
for (const [key ,value] of map) {
    console.log(key ,'-:',value)
    
}