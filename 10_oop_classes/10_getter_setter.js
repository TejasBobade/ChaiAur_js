class User{
    constructor(email,password){
        this.email = email
        this.password = password
    }

    get email(){
       return  this._email.toUpperCase()
    }

    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password} tejas`
    }

    set password(value){
        this._password = value
    }
}

const tejas = new User("Tejas@google.com","abc");
console.log(tejas.password);
console.log(tejas.email);

