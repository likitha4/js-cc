function setUsername(username){
    this.username = username;
    console.log("called in set username function");
}
function createUser(username,email, pwd){
    setUsername.call(this, username);
    this.email=email;
    this.pwd=pwd;
}

const chai= new createUser("manisha","manish1234@gmail.com","kanishka123@")
console.log(chai);