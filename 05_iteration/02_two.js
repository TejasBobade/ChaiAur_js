// while
/*
initialization
while(condition){
    // code goes here
    // increment/decrement
};
*/

// let i = 0; 
// while (i <= 10){
//     console.log(`Value of i is ${i}`)
//     i = i + 2;
// }

const myArray = ["Iron man" , "Thor" , "Black vidow" , "Hulk"];
let i = 0;
while (i < myArray.length ) {
    console.log(`Value is ${myArray[i]}`)
    i = i + 1;
}

/*
initialization
do{
    // code goes here
    // increment/decrement
}while(condition);
*/

let score = 11;
do {
    console.log(`Value is ${score}`)
    score = score + 1;
} while (score <= 10);