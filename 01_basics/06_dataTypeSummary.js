// How data is stored inside memory and how it is accessed is divided in two part 1. primitive 2. non-primitive
// Primitive
//  You don't get the original memory you get the copy of memory any changes that you do is happen at the copy.
// 7 types: String , Number , Boolean , null , undefiend , Symbol , BigInt
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outSideTemp = null
let userEmail;

const id = Symbol("1234")
const anotherId = Symbol("1234")

// console.log(id === anotherId)

const bigNumber = 24235436547568654364n


// master object & web events / browser events you will master JS
// JS is dyanamically typed language



// Reference Type(Non primitive)
// Arrays , Ojects , Functions

const hero = ["shaktiman","nagraj","doga"]

let myObj ={
    name: "Tejas",
    age: 23,
    male: true,
}

function myFunction(){
    // console.log("Hello World!")
}

// console.log(typeof anotherId)


// string => string
// number => number
// BigInt => bigint
// null => object
// undefined => undefined
// symbol => symbol
// Boolean => boolean

// object => object
// array => object
// function => function(object function)


//+++++++++++++++++++++++ Memory +++++++++++++++++++++++++++++++++++++

// Stack(primitive) , Heap(Non primitive)

let myYoutubeName = "CipherVoid"

let anotherName = myYoutubeName
anotherName = "SpaceDiging"

// console.log(myYoutubeName)
// console.log(anotherName)

let userOne ={
    email: "upi@ok",
    upi: "u23@icici"
}

let userTwo= userOne
userTwo.email = "gpi@gmail.com"

// console.log(userOne)
// console.log(userTwo)