var c=988
if(true)
{
    const a=79
    let b=98
    var c=34
}
// console.log(a);
// console.log(b);
console.log(c);

function one(){
    const name="manish"

    function two(){
        const website="yt"
        console.log(name);
    }
    // console.log(website);
    // two()
}
one()

if(true)
{
    const user="manishaaa"
    if(user==="manishaaa")
    {
        const website="youtube"
        console.log(user+website);
    }
    // console.log(website);
}
// console.log(user);


// hoisting
console.log(addone(8)); // this can be done before addone
function addone(val)
{
    return val +1

}
// console.log(addone(8));
// console.log(addTwo(8))--// before initialization we cannot run the addTwo

const addTwo=function(num1)
{
    return num1+7
}
console.log(addTwo(8))

const user={
    username:"hanisha",
    age:45,
    welcomeMessage:function(){
        console.log(`${this.username} welcome to website`);
    }
}
user.welcomeMessage()