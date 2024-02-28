const myarr=[7,8,1,25]

const books=["well","revenge"]

console.log(myarr[2]);
const arrayd=new Array(2,3,4,5,6)
console.log(arrayd[0]);
arrayd.push(5)
console.log(arrayd);
arrayd.pop()
console.log(arrayd);
arrayd.unshift(9)
console.log(arrayd);
arrayd.shift()
console.log(arrayd);
console.log(arrayd.includes(7));
console.log(arrayd.indexOf(30));
console.log(typeof myarr, myarr);
const newarr=myarr.join(arrayd)
console.log("   ",arrayd," ");
console.log(typeof newarr, newarr);

console.log("a ",myarr);
console.log(myarr.slice(2,4));
console.log("b ", myarr);

console.log("c ", myarr);
console.log(myarr.splice(2,4));
console.log("d ", myarr);

