const mykey=Symbol("key1")


const user={
    name: "kaira",
    "full name":"kaira sharma",
    age:29,
    [mykey]:"key1",
    location:"kanpur",
    email:"kaira12@gmail.com",
    isloggedin:true,
    lastloginDays:["monday","friday"]
}
myarr=["h","e","l"]
// Object.create()
console.log(user.age);
console.log(user["email"]);
console.log(user["full name"]);
console.log(user[mykey]);
user[mykey]="key2"
console.log(user);
// Object.freeze(user)
user[mykey]="key3"
console.log(user);
// const mykey=Symbol("key1")


user.greeting=function(){
    console.log(`welcome ${this["full name"]}` );

}
console.log(user);
console.log(user.greeting());
