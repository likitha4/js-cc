// const userEmail="higyb@@yahoo.com"
// truthy values
const userEmail=[]
// if(userEmail){
//     console.log("received user mail");
// }
// else{
//     console.log("no email");
// }
// falsy values
// false,0,-0,BigInt 0n, "",null, undefined,NaN

// truthy values
// "0",'false'," ",[],{},function(){},

// if(userEmail.length==0)
// console.log("empty array");

// const empobj={}

// if(Object.keys(empobj).length==0)
// console.log("empty object ");


// nullish coalescing operator :?? --null / undefined

let vals;
vals=87 ?? 43
vals= null??34
vals=""??769
vals=undefined??"ui"

vals=null??76??67

console.log(vals);

// ternary operator:

// condition?true:false
const free=98
free>=90 ? console.log("more than 90"):console.log("less than 90");;