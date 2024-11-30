let myName = "Tejas        ";

let myChannelName = "Cipher     Void       ";

// console.log(myName.trueLength());


const myHero = ["thor", "sipderman"];

const power  ={
    thor: "Hamer",
    spiderman: "sling",

    getSiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.tejas = function(){
    console.log(`Tejas is present in all object`);
    
}

Array.prototype.heyTejas = function(){
    console.log(`Tejas say hello`);
    
}
// power.tejas()
// myHero.tejas()
// myHero.heyTejas();
// power.heyTejas();



// Inheritance


// old outDated approach
const user = {
    name: "Tejas",
    email: "tejas23@google.com"
}

const Teacher = {
    makeVideo : true,
}

const TeachinfSupport = {
    isAvailable : true,

}

const TaSupport ={
    makeAssignment : "JS assignment",
    fullTime : true,

    __proto__: TeachinfSupport
}

Teacher.__proto__ = user


// Modern syntax
Object.setPrototypeOf(TeachinfSupport,Teacher)


let anotherUserName = "       Tejas Cipher aur chai      ";

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is : ${this.trim().length}`)
}

anotherUserName.trueLength();
"tejas      ".trueLength();
"          tejas drink's the tea       ".trueLength();