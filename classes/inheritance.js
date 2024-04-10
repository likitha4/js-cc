class User{
    constructor(username){
        this.username=username
    }
    logMe(){
        console.log(`username is ${this.username}`);
    }

}
class Teacher extends User{
    constructor(username,password,email ){
       super(username)
        this.password=password
        this.email=email
    }
    addCourse(){
        console.log(`new course added by ${this.username}`);
    }


}
let teacher1=new Teacher("joey","joey65#@","joy123@yahoo.com")
teacher1.addCourse();

teacher1.logMe()
let user1=new User("lokei")
console.log(teacher1===user1);
console.log(teacher1 instanceof User);
console.log(user1 instanceof User);