class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`username is ${this.username}`);
    }
    static createId(){
        return `123`;
    }
}
let user2=new User("kirankher");
console.log(user2.createId);

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email
    }
}
