const age = 28;

if(age > 10 && age < 20){
    // console.log("Yes your age is between 10 to 20: "+age);
};

const num = 50;

// switch(num){
//     case 25:
//         console.log("The number is 25");
//         break;
    
//     case 50:
//         console.log("The number is 50");
//         break;
//     default:
//         console.log("This is default condition");
//         break;
// };

let number = 6;
if((number % 2 === 0) && (number % 3 === 0)){
    // console.log("The number is divisible by both 2 & 3.");
}

let number1 = 15;
if(number1 % 2 === 0){
    console.log("The number is divisible by 2: "+ number1);
}else if(number1 % 3 === 0){
    console.log("The number is divisible by 3: "+ number1);
}else{
    console.log("The number is not divisible by either 2 or 3");
};