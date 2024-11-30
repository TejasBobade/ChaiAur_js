class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`The username is : ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email = email;
        this.password = password;
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai = new Teacher("Chai","chai@gmail.com","1234");

// chai.addCourse()

const masalaChai = new User("masalaChai");
// masalaChai.addCourse()         // error -> TypeError: masalaChai.addCourse is not a function
// masalaChai.logMe("masalaChai")


console.log(chai === masalaChai);
console.log(chai === Teacher);
console.log(chai instanceof Teacher);
console.log(chai instanceof User);



