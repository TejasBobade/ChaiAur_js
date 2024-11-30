// console.log(5 > 1)
// console.log(5 < 1)
// console.log(5 >= 1)
// console.log(5 <= 1)
// console.log(5 == 1)
// console.log(5 != 1)

// console.log("5" > 1)
// console.log("05" > 1)
// console.log("05abc" > 1)    // -> false


// Avoid this type of conversion below are conversion
// console.log(null > 0)          // -> false
// console.log(null == 0)         // -> false
// console.log(null >= 0)         // -> true

// console.log(undefined == 0)    // -> false
// console.log(undefined == 1)    // -> false
// console.log(undefined > 0)     // -> false

// ===     (check if the values are equals also check if the data types of the values are same or not.)

// console.log("5" == 5)
// console.log("5" === 5)