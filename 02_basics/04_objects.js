// const tinderUser = new Object()
const tinderUser = {}
tinderUser.id = "123abc"
tinderUser.name = "Tejas"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser ={
    email: "tejas@google.com",
    fullName: {
        userFullName: {
            firstName: "Tejas",
            lastName: "Bobade",
        }
    }
};

// optional chaining if the fullName does not exist some time when we get response from api we need to use this => ?
// console.log(regularUser.fullName?.userFullName.firstName)

const obj1 ={1:"a",2:"b"}
const obj2 ={3:"c",4:"d"}
const obj3 ={5:"e",6:"f"}

// const obj3 = {obj1 , obj2}
// const obj4 = Object.assign({},obj1,obj2,obj3)  // .assign(target , source1 , source2, ...)

const obj4 ={...obj1,...obj2,...obj3}
// console.log(obj4);

// when the data come from database many time it is in format of array of object
const users =[
    {
        id: 1,
        email: "tejas@gmail.com",
    },
    {
        id: 1,
        email: "tejas@gmail.com",
    },
    {
        id: 1,
        email: "tejas@gmail.com",
    },
]

// users[1].email

// console.log(tinderUser)
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn"))


const course = {
    courseName: "Js in Hindi",
    courseFees: 999,
    courseInstructor: "Hitesh"
}

// course.courseInstructor

// object distructure
const {courseInstructor} = course
const {courseInstructor: Instructor} = course
console.log(Instructor);

// react part
// const navbar = ({company}) =>{

// }

// navbar(company = "Tejas")


// json syntax
// {
//     "name": "Tejas",
//     "courseName": "Js in hindi",
//     "price": "free",
// }