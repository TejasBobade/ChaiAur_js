// Reduce
// A reduce method executes user supplied "reducer" callback function on each element of the array.

const myNums = [1,2,3];

// const myTotal = myNums.reduce(function (acc , curVal){
//     console.log(`acc: ${acc} and curVal: ${curVal}`);
//     return acc + curVal;
// }, 0)

const myTotal = myNums.reduce((acc,cur) => acc+cur, 0)
console.log(myTotal);

const shopingCart = [
    {
        iteamName: "py course",
        price: 999,
    },
    {
        iteamName: "mobile dev course",
        price: 5999,
    },
    {
        iteamName: "data science course",
        price: 12999,
    },
]

const priceToPay = shopingCart.reduce((acc,item) => acc + item.price , 0)

console.log(priceToPay)