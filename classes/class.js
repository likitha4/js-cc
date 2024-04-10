// class User{
//     constructor(username,email,password){
//         this.username=username;
//         this.email=email;
//         this.password=password;
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changeUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }
// const user1=new User("manisha","manishaghatkare123@gmail.com","kiara34@")
// console.log(user1);
// console.log(user1.encryptPassword());
// console.log(user1.changeUsername());

// 
function User(username,email,password){
    this.username=username;
    this.email=email;
    this.password=password;
}
User.prototype.encryptPassword=function(){
    return `${this.password}abc`
}

User.prototype.changeUsername=function(){
    return `${this.username.toUpperCase()}`
}
let user2=new User("kiranroy","kiranroyshabbir123@yahoo.com","kiranray67pokemon")
console.log(user2.changeUsername());
console.log(user2);