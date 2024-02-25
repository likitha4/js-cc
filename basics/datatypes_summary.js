///prmitivr
// 7 types==string, number, boolean, null, undefined, symbol, bigint(scientific or large vals)

const score=10
const scorevalue=98.99



const isLoggedIn=false;
const outsidetemp=null

let email;

const id=Symbol('123')

const anotherid=Symbol('123')
console.log(id===anotherid)
console.log(id == anotherid)

const bigNumber=6666666555555555555n
console.log( typeof bigNumber)


// BigInt()
// reference types(non primitive)
// array, objects, functions
const heros=["shaktiman","naagraj","doga"]
let obj={
    name:"manisha",
    age:45,
    city:"hyderabad"
}

const myfunc=function()
{

    console.log("hello world");
}



console.log(typeof myfunc)
console.log(typeof obj)
console.log(typeof heros)
console.log(typeof id)
// stack-primitive, heap-non primitive

let nan3="hello";
let nan4=nan3;
nan4="mummy";
console.log(nan3,nan4," nan3 and nan4");

let obje={
    "name":"wone",
    "surname":"emi"
}
console.log(obje," object1");
let obje3=obje;
console.log(obje3, "object2");
obje3.name="wominxing"
console.log(obje3,"second object");
console.log(obje,"first object");