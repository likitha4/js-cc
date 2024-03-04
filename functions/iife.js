// immediately invoked function expressions(iife)

(function chai(){
    // named iife
    console.log("db connected");
})();
// /to get rid of global pollution-global scope of variables
// make sure to put ; semicolon after iife when there are 2 or more

(()=>{
    console.log("wooh wooh");
})();
((name)=>{
    console.log(`db connected ${name}`);
})("manisha");