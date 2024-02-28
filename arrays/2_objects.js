// const user=new Object()--singleton object

const user={} //non-singleton object
user.id="345kainaat"
user.name="manisha"
user.email="manis123@gmail.com"

console.log(user);

const usernone={
    email:"123amaira@gmail.com",
    fullname:{
        username:{
            firstname:"manisha",
            lastname:"sharma"
        }
    }
}
console.log(usernone.fullname?.username);


const obj1={1:"abc",2: "cde"}
const obj2={3:"cfe", 4:"yte"}
const obj5={5:"ytef",6:"ihj"}
const obj3={obj1,obj2}
console.log(obj3);
// console.log(obj1.join(obj2));
console.log(obj5);
const obj4=Object.assign({},obj1,obj2,obj5)
console.log("object", obj1);
console.log(obj4);
const obj6={...obj1,...obj2}
console.log(obj6);


const users=[
        {
            id:12,
            email:"123fakira@gmail.com"
        },
        {
            id:14,
            email:"fukira@123gmail.com"
        }

]
console.log(users[1].email)
console.log(Object.keys(usernone));
console.log(Object.values(usernone));
console.log(Object.entries(usernone));
console.log(usernone.hasOwnProperty('ema'));