// array
// Collection of different type of datatype
// array is resizeble
// JS array copy operations create a shallow copies (All standard built in copy operations with any JavaScript object creates a shallow copies, rather than deep copies.)
// shallow copyies => properties share the same reference
// deep copies => properties do not share same reference
const myArr = [1,2,3,4,5]
const myHeroes = ["Iron Man","Hulk","Capton America","Black vidow","Spider Man","Thor"]

const myArr2 = new Array(1,2,3,4,5)
// console.log(myArr[0])

// Arry Method

// myArr.push(9)
// myArr.push(7)
// myArr.pop()
// myArr.unshift(0)
// myArr.shift()
// console.log(myArr.includes(9))
// console.log(myArr.indexOf(3))
// console.log(myArr.indexOf(9))   // Not present in array return -1
// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);


// Slice or splice

console.log("A " , myArr)
// slice does'nt change original value
console.log(myArr.slice(1,3))

console.log("B " , myArr)
// splice change the original value
const myn2 = myArr.splice(1,3)
console.log(myn2)

console.log("C " , myArr)
