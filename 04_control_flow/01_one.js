// Control Flow / Logic Flow

// if

const isUserLoggedIn = true;
const temperature = 41
// if (temperature < 50){
//     console.log("Temp less than 50.");
// }
// else{
//     console.log("Temp greater than 50.");
// }
// console.log("executed")
// < , > , <= , >= , == , != , === , !==

// const score = 200
// if (score > 100){
//     const power = "fly"
//     console.log(`User power: ${power}`)
// }
// console.log(`User power: ${power}`)   // error


const balance = 1000
//Emplicite code
// if (balance > 500) console.log("test1"), console.log("test2");

// Nesting
// if (balance < 500){
//     console.log("Less than 500");
// }else if(balance < 750){
//     console.log("Less than 750")
// }else if(balance < 900){
//     console.log("Less than 900")
// }else{
//     console.log("Less than 1200")
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard){
    console.log("Allow to buy the course.");
}

if (loggedInFromEmail || loggedInFromGoogle){
    console.log("Allowed to logged In.");
}