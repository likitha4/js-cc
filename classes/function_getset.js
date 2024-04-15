function user(email, password){
    this._email=email;
    this._password=password
    Object.defineProperty(this,'email',{
        get:function(){
            return this._email.toUpperCase()
        },
        set:function(val){
this._email=val;
        }
    })
    Object.defineProperty(this,'password',{
        get:function(){
            return this._password.toUpperCase()
        },
        set:function(val){
this._password=val;
        }
    })



}
const user1=new user("kalikaaruna","kalika123@")
console.log(user1);
console.log(user1._email);
console.log(user1.email);