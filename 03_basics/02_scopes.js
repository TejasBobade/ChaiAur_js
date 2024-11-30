// var c = 300;
let a = 300

if (true){
    let a = 10;
    // console.log(a)
    const b = 20;
}

// console.log(a)
// console.log(b)


function one(){
    const username = "Tejas";
    function two(){
        const website = "Youtube";
        console.log(username)
    }
    // console.log(website)
    two()
}

// one()

if (true){
    const username = "Tejas";
    if (username === "Tejas"){
        const website = " Youtube"
        // console.log(username + website)
    }
    // console.log(website) // error
}

// console.log(username) //error


// +++++++++++++++++++ Interesting ++++++++++++++++++++++++++

console.log(addOne(5))
function addOne(num){
    return num + 1
}

// addTwo(5)  // error
const addTwo = function(num){
    return num + 2
}
console.log(addTwo(5))