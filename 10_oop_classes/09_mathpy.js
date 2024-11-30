let descriptor = Object.getOwnPropertyDescriptor(Math , 'PI')
// console.log(descriptor);
/*
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}
*/
// console.log(Math.PI);

const chai = {
    name : "Ginger Chai",
    price: 250,
    isAvalible : true
}

// console.log(Object.getOwnPropertyDescriptor(chai , "name"));

Object.defineProperty(chai , "name" , {
    writable : false,
    enumerable : false
})

console.log(Object.getOwnPropertyDescriptor(chai , "name"));

for (const [key , value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`${value}  : ${key}`);
    }
}