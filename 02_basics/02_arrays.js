const marvel_heroes = ["Thor","Iron Man","Spider Man"]
const dc_heroes = ["Super Man","Flash","Batman"]

// push changes the original array
// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

// concat create a new array by adding two arrays don't change the original array
// const all_heroes = marvel_heroes.concat(dc_heroes)
// console.log(all_heroes);

// we are going to perform spread operation using spread operator 
const all_new_heroes = [...marvel_heroes,...dc_heroes]
// console.log(all_new_heroes)

// flat(Infinity) spread each array element
const another_array = [1,2,3,[4,5,6],7,[8,9,[3,4,5]]]
const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array)
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 3, 4, 5] This is out put

// console.log(Array.isArray("Tejas"))
console.log(Array.from("Tejas"))
console.log(Array.from({name:"Tejas"}))     // Interesting thing for interview // Gives the empty array

let score1 = 200
let score2 = 300
let score3 = 400
console.log(Array.of(score1,score2,score3))