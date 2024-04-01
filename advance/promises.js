const promiseOne= new Promise(function (resolve, reject)
{
// // do an async task--db calls, crypto,
setTimeout(function(){
    console.log("async task one is complete");
    resolve();
},2000)
} )

// import fetch from "node-fetch";

promiseOne.then(function (){
    console.log("promise consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve();
    },1000)
}).then(function(){
    console.log("async 2 resolved");
})

const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Chai", email:"chai@example.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})
const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false;
        if(!error){
            resolve({username:"manisha",pwd:234})
        } else{
            reject('error:wrong')
        }
    },3000)
})

promiseFour.then((user)=>{
        console.log(user);
        return user.username;
})
.then((username)=>console.log(username)
)
.catch(function(err){
    console.log(err, "is the error");
}).finally(()=>console.log("the promise is either resolved or rejected "))
// console.log(username);

const promiseFive= new Promise(function(resolve,reject){
     setTimeout(function(){
        let error=true;
        if(!error){
            resolve({username:"manisha",pwd:234})
        } else{
            reject('error:wrong')
        }
    },100)
})
// async  function consumePromiseFive(){
//     const response=await promiseFive;
//     console.log(response);

// }

async  function consumePromiseFive(){
    try{
    const response=await promiseFive;
    console.log(response);
    }
    catch(error){
        console.log(error);
    }
}
consumePromiseFive()
// const fetch = require("node-fetch");

// async function getAllUsers(){
//     try{
//     const response= await fetch('https://jsonplaceholder.typicode.com/users')
//         const data= await response.json()
//     console.log(typeof response);
//     console.log(response);
//     }
//     catch(err){
//         console.log(err);
//     }
// }
// getAllUsers();
import fetch from 'node-fetch';
// import 'whatwg-fetch';
// const fetch = require('node-fetch');
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json();
})
.then((data)=>{console.log(data);})
.catch((error)=>console.log(error))