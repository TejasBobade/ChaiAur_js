function SetUsername(username){
    // Complex DB calls
    this.username = username;
    console.log("Called");
    
}

function createUser(username,email,password){
    // the call is not happing the only reference is getting passed
    // SetUsername(username);

    SetUsername.call(this , username);

    this.email = email;
    this.password = password;
}

const user = new createUser("Tejas","tejas00@google.com","googlies");

console.log(user);
