console.log(Math.PI);
let descriptor=Object.getOwnPropertyDescriptor(Math,"PI")
Math.PI=9
console.log(Math.PI);
console.log(descriptor);

const mynewobj={
    name:"manisha",
    age:30,
    isavailable:true,
    getname:function(){
        console.log(`${name}`);
    }
}
console.log(mynewobj);
console.log(Object.getOwnPropertyDescriptor(mynewobj,"name"));

Object.defineProperty(mynewobj,"name",{
    // writable:false,
    enumerable:false,
    // configurable:false
})
Object.defineProperty(mynewobj,"age",{
    // writable:false,
    enumerable:false,
    // configurable:false
})
Object.defineProperty(mynewobj,"isavailable",{
    // writable:false,
    enumerable:false,
    // configurable:false
})
// console.log(mynewobj,"after chaging");
console.log(Object.getOwnPropertyDescriptor(mynewobj,"name"));
for (let [key,val] of Object.entries(mynewobj)) {
   if(typeof val!== "function"){
    console.log(`Inside iteration ${key}: ${val}`);
   }
   else
   console.log("no items to iterate" );
}