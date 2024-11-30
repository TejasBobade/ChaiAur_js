// ES6

class User{
    constructor(userName,email,password){
        this.userName = userName;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUserName(){
        return `${this.userName.toUpperCase()}`
    }
}

const chai = new User("Chai" , "chai@gmail.com" , "2345");

console.log(chai.encryptPassword());
console.log(chai.changeUserName());



// behind the scene

function user(userName,email,password){
    this.userName = userName;
    this.email = email;
    this.password = password;
}

user.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

user.prototype.changeUserName = function(){
    return `${this.userName.toUpperCase()}`
}

const tea = new user("tea" , "tea@gmail.com" , "2445");
console.log(tea.encryptPassword());
console.log(tea.changeUserName());