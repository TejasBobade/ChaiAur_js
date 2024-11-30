
const user = {
    userName : "Tejas",
    loginCount : 8,
    signIn : true,
    getUserDetails : function(){
        // console.log("Get a user details from database.")
        // console.log(`User Name : ${this.userName}`)
        console.log(this)

    }
}

// console.log(user.userName);

// console.log(user.getUserDetails());

// 


// To avoid above condition we use constructor function -> new -> which is going to create new context each time function is called
// step 1 -> As we declare new an empty object get cerated
// step 2 -> constructor function get called due to new keyword ->it packs up all the arguments and give it to you
// step 3 -> all the content(arguments) get injected inside the this keyword
// step 4 -> You will be get the argument inside the function
// constructor function gives new instance each time

function userDetails(userName , loginCount , isLoggedIn ){
    this.userName = userName;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.userName}`);
        
    }

    return this;
}

// This will over write the previous call in this case userTwo will over write userOne
// const userOne = userDetails("Tejas" , 0 , true);
// const userTwo = userDetails("Luffy" , 1 , false);
// console.log(userOne);

const userOne = new userDetails("Tejas" , 0 , true);
const userTwo = new userDetails("Luffy" , 1 , false);
// constructor is reference to itself in this case itself is userDetails
console.log(userOne.constructor);
// console.log(userTwo);

// 7.15