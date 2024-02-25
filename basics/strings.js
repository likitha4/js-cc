const nm="well"
const val=90
console.log(nm + val + " world ");


console.log(`hello here is ${nm} and value is ${val}`);

const name=new String('welcome -is-the- value');
console.log(name[0]);
console.log(name.__proto__);

console.log(name.length);
console.log("split", name.split(' '));
console.log(name.toUpperCase());
console.log(name.charAt(3));
console.log(name.indexOf('e'));

console.log(name.substring(2,4));
console.log(name.slice(-4,-1));
const str2="    wel   doneee   "
console.log(str2)
console.log(str2.trim());

const url="https://well//wellness%20done"

console.log(url.replace('%20','-'));
console.log(url.includes('wellnj'));