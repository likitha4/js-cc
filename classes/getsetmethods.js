class user{
    constructor(email,password){
        this.email=email
        this.password=password
    }

    get email(){
        return this._email.toUpperCase();
    }
    set email(value){
        this._email=value;
    }
    get password(){
        return this._password.toUpperCase()
    }
    set password(val){
        this._password=val;
    }

}
const user1=new user("manisha123kulkarni@gmail.com","manik23")
console.log(user1);
console.log(user1.password);
console.log(user1.email);