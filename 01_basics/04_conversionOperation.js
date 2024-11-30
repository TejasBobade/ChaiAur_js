// ***********************Conversion of datatypes*******************************

// let score =  "32abc"
// let score = null
// let score = undefined
// let score = true
let score = "Tejas"
// console.log(typeof score)

let valueInNumber = Number(score)

// console.log(typeof valueInNumber)
// console.log(valueInNumber)

// "33" => 33
// "33abc" => NaN
// true => 1 / false => 0

// let isLoggedIn = 1
// let isLoggedIn = ""
// let isLoggedIn = null
// let isLoggedIn = undefined
let isLoggedIn = "tejas"
// console.log(typeof isLoggedIn)
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn)

// 1 => true / 0 => false
// "" => false
// "tejas" => true
// null => false
// undefined => false

// let someNumber = 33
// let someNumber = null
let someNumber = undefined
let stringNumber = String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber)
// 33 => "33"
// null => string
// undefined => string

// ***************************Operations*****************************

let value = 3
let negValue = -value
// console.log(negValue)

// console.log(2 + 2)
// console.log(2 - 2)
// console.log(2 * 2)
// console.log(2 / 2)
// console.log(2 ** 2)
// console.log(2 % 2)

let str1 = "Hello"
let str2 = "Tejas"
let str3 = str1 + str2
// console.log(str3)

// console.log("1" + 2)         -> 12
// console.log(1 + "2")         -> 12
// console.log("1" + 2 + 2)     -> 122
// console.log(1 + 4 + "2")     -> 5 + "2" -> "52"

// console.log( (3 + 2) * 4 % 2)

// console.log(true)
// console.log(+true)
// console.log(true + 1)
// console.log(+"")


let num1 , num2 , num3;

num1 = num2 = num3 = 2 * 3

let gameCounter = 100
gameCounter++;
++gameCounter;
// console.log(gameCounter)


// mdn increment
let x = 3;
const y = x++;
//  this is string interpolation
// console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

// console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"