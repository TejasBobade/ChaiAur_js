// sigleton => it's the object created using constructor and not a literal

// Object literals
// keys by default processed as a string

// Interview take a symbol add it to a object as a key  and print it
const mySym = Symbol("key1")
const JsUser = {
    name: "Tejas",
    "full Name": "Tejas Bobade",
    [mySym]: "My Symbol",
    age: 23,
    location: "satara",
    email: "tejas@google.com",
    loggedIn: false,
    lastloginDays: ["Monday","Saturday"],
}

// console.log(JsUser.email)
// console.log(JsUser["email"])

// console.log(JsUser.full Name)
// console.log(JsUser["full Name"]) 
// console.log(JsUser.mySym)             // -> undefined
console.log(JsUser[mySym])
// console.log(typeof JsUser[mySym])


JsUser.email = "tejas@chatgpt.com"
// prevent changes
// Object.freeze(JsUser)
JsUser.email = "tejas@microsoft.com"
// console.log(JsUser)


JsUser.greeting = function(){
    console.log("Hello Js User");
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js User ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());