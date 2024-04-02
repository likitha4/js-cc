// let user={
//     name:"manisha",
//     age:35,
//     profession:"doctor",


//     getDetails(){
//         // console.log(user);
//         console.log(`username: ${this.name}`);
//         console.log(this);
//     }
// }

// console.log(user["name"]);
// console.log(user.age);
// console.log(user.getDetails());
// console.log("hello--outside of function" ,this);

// const promiseOne=new Promise()
// const date=new Date()
function user(username,age,profession){
        this.username=username
        this.age=age
        this.profession=profession
        this.greeting=function(){
            console.log(`welcome ${this.username} `);
        }
        console.log(username,age,profession);
        // return this
}

let output=new  user("lathika",42,"pilot")
// let op2=new user("hardik","34","cricketer")

console.log(output.greeting());
// console.log(op2);

