// let name="harikaa"
// function truelength(val){
//  let value= val.trim().length;
//  console.log(`True length of ${val} is ${value} `);
// }

// console.log(name.trim().length);
// const user=new truelength()
// Object.prototype.truelength=function(){
//  let value= val.trim().length;
//  console.log(`True length of ${val} is ${value} `)

// let myheros=["thor","spiderman"]
// let heropowers={
//     thor:"hammer",
//     spiderman:"sling",

//     getSpiderPower:function(){
//         console.log(`spidy power is ${this.spiderman}`);
//     }
// }
// Object.prototype.hitesh=function(){
//     console.log(`hitesh is present in all objects`);
// }
// heropowers.hitesh()
// myheros.hitesh()
//  when some prototype is declared in object --that passes to Array, function, string
// when some prototype is declared in array-- it stays in array itself. 

// Array.prototype.result=function(){
    // console.log(`Here comes the array for checking prototype`);
// }

// myheros.result();
// heropowers.result();

// inheritance

// const user={
//     name:"chai",
//     email:"kamalkichai@3412gmail.com"
// }
// const teacher={
//     makevideo:true,

// }
// const teachingSupport={
//     isavailable:false,
// }
// const tasupport={
//     makeassignment:' JS Assignment',
//     fullTime: true,
//     __proto__: teachingSupport
// }
// teacher.__proto__=user

// console.log(teachingSupport,"teaching support");
// console.log(teacher.__proto__," teacher");

const ameera={}
// modern syntax
// console.log(ameera.__proto__,"before setting prototype");
// Object.setPrototypeOf(ameera, teacher)
// console.log(ameera.__proto__,"after set prototype");

let anotherUsername="manishaaa    "
String.prototype.trueLength=function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);-- undefined
    console.log(`${this.trim().length}`);
}
anotherUsername.trueLength()
"kanikaaa".trueLength()
"kokilabehan".trueLength()