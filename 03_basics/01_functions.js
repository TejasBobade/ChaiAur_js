// Function defination
function sayMyName(){
    console.log("H")
    console.log("E")
    console.log("L")
    console.log("L")
    console.log("O")
}


// sayMyName       // This is function reference
// sayMyName()     // This is function execution

// function functionName(parameters){}
// function addTwoNumber(number1,number2){
//     console.log(number1 + number2)
// }
function addTwoNumber(number1,number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}

// functionName(arguments)
// addTwoNumber(23,34)
// addTwoNumber(23,"34")
// addTwoNumber(23,"a")
// addTwoNumber(23,null)         // -> 23

const result = addTwoNumber(3 , 4)
// console.log("Result" , result)

// default parameter username = "Sam"
function loginUserMessage(username = "Sam"){
    // if(username===undefined){
    if(!username){
        console.log("Please enter the username")
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Tejas"))
// console.log(loginUserMessage())     //Undefined

// rest operator => ...num1 (spread operator and rest operator defined in same way but they have different use case)
function calculateCartPrice(val1 , val2 , ...num1){
    return num1
}

// console.log(calculateCartPrice(200,300,400))   // ...num1 =>[ 400 ]


const user = {
    userName: "Tejas",
    price: 2300,
}

function handelObject(anyobject){
    console.log(`User name is ${anyobject.userName} and price is ${anyobject.price}`)
}

// handelObject(user)

const myNewArray = [100,200,300,400]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray))