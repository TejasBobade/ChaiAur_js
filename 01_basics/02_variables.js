//  Variable when they are declared they are given a space in memory varible name is name of that space and we strore value inside it

const accountId = 14354  // we can not change the const it is an constant value

let accountEmail = "tejas16@gmail.com"  // It is an variable we can change the value of let it is block scoped

var accountPassword = "1243546" // var also is an variable but it does not have scope it can generate issues in code 

accountcity = "Pune"    // The variable can be declared directly without const and let but it not good pratice don't use it

let accountState;
// accountId = 2  // Not allowed
accountEmail = "tej@gmail.com"
accountPassword = "6676868"
accountcity = "Mumbai"
console.log(accountcity)

/*
Prefer not to use var because of issuse in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountcity,accountState])