const accountId="76563"
let accountName="harini"
var accountCity="madurai"

state="tamilnadu"
{
let accountName="manisha";
console.log("within block let is redeclared", accountName);
accountCity="varanasi";
console.log("within block city is", accountCity);
}
// accountCity="varanasi";
/*
prefer not to use var bcoz of block and functional scope
*/ 
console.log(accountId);
console.table([accountName,accountCity,accountId,state])