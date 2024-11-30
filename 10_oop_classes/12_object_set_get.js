const user ={
    _email: "Tejas@google.com",
    password: "tejas#pass",


    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value;
    }
}

const tea = Object.create(user)
console.log(user['email']);


// 9.44