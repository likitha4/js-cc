const user={
    username:"hanisha",
    age:45,
    welcomeMessage:function(){
        console.log(`${this.username} welcome to website`);
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username="manisha"
// user.welcomeMessage()
// console.log(this);

// function chai(){
//     let name="mkih"
//     console.log(this.name);
// }
// const chai=function (){
//     let name="mkih"
//     console.log(this.name);
// }

// chai()
const chai =()=>{
    let name="mkih"
    console.log(this.name);
}
// chai()
// const addnums=(num1,num2)=>{
//     return num1+num2;
// }
// console.log(addnums(3,4))
const addnums1=(num1,num2)=> num1+num2;
console.log(addnums1(98,0));


const addnums=(num1,num2)=> (num1+num2);
console.log(addnums(56,-65));

const namereturn=(num1,num2)=> ({user:"loki"})
console.log(namereturn());
// this keyword--not working within function

const myarr=[56.7,8.9,78]
myarr.forEach(
    ()=>console.log(i))