// for each 
const programming = ['python','cpp','JS','Java']

// programming.forEach(function (item) {
//     console.log(item)
// } );

// programming.forEach((item) => {
//     console.log(item)
// } );

// function printMe(item){
//     console.log(item)
// }

// programming.forEach(printMe)

// programming.forEach((item,index,arr) => {
//     console.log(item,index,arr)
// })

const coding = [
    {
        languageName: "Java Script",
        languageFileName: "js",
    },
    {
        languageName: "Java",
        languageFileName: "java",
    },
    {
        languageName: "Python",
        languageFileName: "py",
    },
]

coding.forEach((iteam) => {
    console.log(iteam.languageName,iteam.languageFileName)
})