// for of

// ["","",""]
// [{},{},{}]
// const arr = [1,2,3,4,5,6,7,8,9]
// for (const num of arr) {
//     console.log(num);
// }

// const greeting = "Hello World!"

// for (const greet of greeting) {
//     if (greet == " "){
//         continue;
//     }
//     console.log(`Each car is ${greet}`)
// }


// Map
const map = new Map()
map.set("IN" , "India");
map.set("USA" , "United State of America");
map.set("Fr" , "France");
map.set("IN" , "India");

// console.log(map)
// array di-structure [key , value]
// for (const [key , value] of map) {
//     console.log(key , ":-" , value)
// }

const myObj ={
    game1: "NFS",
    game2: "sipder man",
}

// Give us the error -> myObj is not iterable
// for (const key of myObj) {
//     console.log(key , ":-" , value)
// }