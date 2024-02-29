function name(){
console.log("welcome");
}
name()
function check (num,num2)
{
    console.log(num+num2);
}
// check(56,null)
check("welc",null)

function chs(num3,num4)
{
    let res=num3+num4;
    return res;
}
let res=chs(76,98)
// console.log(res);
function loginUserMessage(username="nmni"){
    if(!username)
    {
        console.log("please enter username");
        return 
    }
    return `${username} logged in`
}

const names=loginUserMessage("karla")
console.log(names);