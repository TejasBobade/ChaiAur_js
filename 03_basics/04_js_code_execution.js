// Important Topic for Interview
// How the js code get executed
// How call stack get executed

// JavaScript Execution Context
// js code -> Global Execution Context (Global:this, for browser this(Global) is window)
// Global EC 
// Function EC
// Eval EC
// Sigle threaded language

// Phases of JS code Execution
// Memory Creation Phase(Creation Phase)
// Execution Phase

let val1 = 10;
let val2 = 5;
function addNumber(num1,num2){
    return num1 + num2;
};

let result1 = addNumber(val1,val2)
let result2 = addNumber(10,2)

console.log(result1)
console.log(result2)

// 1. Global execution(Global Environment)  -> this

/*
// 2. memory phase ->
val1 -> undefined
val2 -> undefined
addNumber -> defination
result1 -> undefined
result2 -> undefined
*/

/*
// 3. execution phase ->
val1 -> 10
val2 -> 5
result1 -> 15   (we get this value after creation and execution phase for addNumber function block is completed and we get a result)
result -> 12

addNumber ->[new variable environment + execution thread]
// 1. memory phase ->
val1 -> undefined
val2 -> undefined
total -> undefined
// 2. execution phase ->
num1 -> 10
num2 -> 5
total -> 15
// After execution is completed the block created by addNumber Function get deleted.

addNumber ->[new variable environment + execution thread]
// 1. memory phase ->
val1 -> undefined
val2 -> undefined
total -> undefined
// 2. execution phase ->
num1 -> 10
num2 -> 2
total -> 12
// After execution is completed the block created by addNumber Function get deleted.

*/

// Call Stack
// Global exec. -> one()(this function get added to stack and after execution it get deleted from stack)
// ex. if you have three function named one(),two(),three() if you call one() and one nead two() and two nead three()
// then the stack looks like => global->one()->two()->three()
// which element could get out first 
// LIFO(last in first out) we use this rule

function one(){
    console.log("One");
    two();
};

function two(){
    console.log("Two");
    three();
};

function three(){
    console.log("Three");
};

one();
two();
three();

// 6.23