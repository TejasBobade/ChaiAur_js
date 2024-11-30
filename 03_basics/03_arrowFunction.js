const user = {
    username: "Tejas",
    price: 999,
    welcomeMessage: function(){
        // this => Refers to the current context
        console.log(`${this.username} , welcome to website`);
        // console.log(this)
    }
}

// user.welcomeMessage();
// user.username ="Sam";
// user.welcomeMessage();
// this => if we console.log the this will be empty object {}
// but if you do this in browser the browsers global object is ->window
// console.log(this);

// function chai(){
//     const username = "Tejas"
//     console.log(this.username)
// }

// chai()

// const chai = function(){
//     const username = "Tejas"
//     console.log(this.username)
// }

// const chai = () =>{
//     const username = "Tejas"
//     console.log(this.username)
// }

// chai()

// explicite return
// const addTwo = (num1,num2) =>{
//     return num1 + num2
// }

// This is emplicite return
// const addTwo = (num1,num2) => num1 + num2
// The below function format used alot in React.js
// const addTwo = (num1,num2) => ( num1 + num2 )
const addTwo = (num1,num2) => ( {username: "Tejas"} );

// console.log(addTwo(2,3))

// const myArray = [2,3,5,2,6]
// myArray.forEach(function(){})
// myArray.forEach(() => ())


// Interview
// Imediately Invoked Function Expression (IIFE)
// Some time their is problem due to global scope polution to remove the global scope polution we use IIFE
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) =>{
    // Unnamed IIFE
    console.log(`DB CONNECTED Two ${name}`);
})("Tejas");