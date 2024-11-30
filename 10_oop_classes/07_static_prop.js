class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`UserName : ${this.username}`);
    }

    // some time you does not want to give access of this meathod to the object that is instancetiated from this class
    static createId(){
        return `123`;
    }
}

class Teacher extends User{
    constructor(username , email){
        super(username)
        this.email = email;
    }
}

const iphone = new Teacher("tejas@google.com")

const tejas = new User("Tejas");

// console.log(tejas.createId());
// console.log(tejas.createId());
// console.log(tejas.createId());

console.log(iphone.createId())
