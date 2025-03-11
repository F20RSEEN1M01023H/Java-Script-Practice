// const tinderUser = new Object()
const tinderUser = {}
tinderUser.id="123abc"
tinderUser.name="Hammad"
tinderUser.isLoggedIn= false

// console.log(tinderUser);

const regularUser={
    email:"something@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Hammad",
            lastname:"Ashraf"
        }
    }

}
// console.log(regularUser.fullname.userfullname.firstname);

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
const obj4={5:"c",6:"d"}

// const obj3={obj1,obj2}
// const obj3=Object.assign({},obj1,obj2,obj4)

const obj3={...obj1,...obj2,...obj4}
// console.log(obj3);

const Users=[
    {id:1,
     email:"hami@gmail.com"
    },
    {id:1,
     email:"hami@gmail.com"
    },
    {id:1,
     email:"hami@gmail.com"
    },
    {id:1,
     email:"hami@gmail.com"
    },
    {id:1,
     email:"hami@gmail.com"
    }

]
Users[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn')
// );



// +++++++++++++++++++ Destructuring +++++++++++++

const course ={
    coursename:"Javascript",
    price:"999",
    courseInstructor:"Hammad"
}

// course.courseInstructor  

const {courseInstructor}=course
const {courseInstructor:instructor}=course

// console.log(courseInstructor);
console.log(instructor);

// *************   JSON FORMAT  ************
// {
//     "name":"hammad",
//     "course":"javascript",
//     "price":"free"
// }

// [
//     {},
//     {},
//     {}
// ]