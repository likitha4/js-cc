const arr=[45,78,"manisha",890,765]
for (const element of arr) {
    console.log(element);
    
}
greetings="hello welcome!!!?"
for (const letter of greetings) {
    if(letter==' ')
    continue;

    console.log(`${letter} is each character`);
    
}
// maps
map=new Map()
map.set('india','new delhi')
map.set('usa',"washington dc")
map.set("turkey","no idea")
map.set("india","new delhi")
console.log(map);
for (const [key,val] of map) {
    console.log(key," has the capital",val);
    
}
const myobj={
    'game':'creator',
    'book':'farishtha',
    'depression':'exercise',
    'js':'java script',
    cpp:'c++',
    rb:'ruby,'
}
// for (const [key,val] of myobj) {
//     console.log(iterator);
// }
// }--wont work for objects
for (const key in myobj) {

console.log(`the key is ${key} and the value is ${myobj[key]}`);        
    }

// const arr=[45,78,"manisha",890,765]
// for (const key in arr) {
//         console.log(arr[key]);
//     }
// for (const key in map) {
// console.log(key);
// }

// const str="welcome to the world"
// for (const key in str) {
// console.log(str[key]);
// }
    
// .forin--for objects, arrays,strings
// forof-maps, arrays, strings

// const coding=["c","java","c++","python","ruby"]


// coding.forEach( function (item){ 
// console.log(item);
// }
// )
// coding.forEach((item)=>{
//     console.log(item);
// })
// function printnames(value){
//     console.log(value);

// }
// coding.forEach(printnames)

// coding.forEach((item,index, arr)=>{
//     console.log(item,index, arr);
// })

const mycode=[
    {
        languageName:"javascript",
        languageFileName:".js"
    },
    {
        languageName:"c",
        languageFileName:".c"
    },
    {
        languageName:"c++",
        languageFileName:".cpp"
    },
    {
        languageName:"python",
        languageFileName:".py"
    }
    
    
]
mycode.forEach((item)=>{
    console.log(item.languageFileName);
})
