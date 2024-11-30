const name = "Tejas"
const repoCount = 50

// console.log(name + repoCount + "Value")

// String interpolation
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const newGame = new String("tejasMK-1")

// console.log(name[0]);
// console.log(name.__proto__);
// console.log(name.length);
// console.log(name.toUpperCase());
// console.log(name.charAt(2));
// console.log(name.indexOf("T"));

// const newString = newGame.substring(0,3);
// console.log(newString)
const stringSlice = newGame.slice(-1,2);
// console.log(stringSlice);

const userName = "     Tejas Bobade              "
// console.log(userName)
// console.log(userName.trim())

// const url = "https://tejas.com/tejas%20company"
// console.log(url.replace("%20","_"))
// console.log(url.includes("tejas"))

console.log(newGame.split("_"))