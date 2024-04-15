const user={
    _email:"kirshakurari",
   _password:"kanishaka",

    get email(){
        return this._email;
    },
    set email(val){
        this._email=val;
    }
}
console.log(user);
let newuser=Object.create(user)
console.log(newuser.email ,"is the email;p0");
