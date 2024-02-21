let score="hanisha"
console.log("score", typeof score, score)

let value=Number(score);//conversion
console.log("value " ,typeof value, " is ", value)

// "76"-- 76
/*
 "76abc"=nan
 true-1, false-0
 "hanisha"-nan

*/

var cv="123";

let convertedvalue=Boolean(cv);
console.log(cv," ", convertedvalue)
// 1-true, 0-false
// ""-false,
//  "123"-true


let sp=65;
let stringnum=String(sp);
console.log(sp, " now in string", stringnum, " " ,typeof stringnum);

// 65-- 65

let object=Object(sp);
console.log("object val", object,"type is ", typeof object);


// operations
let val=8
let negvalue=-val;
console.log(negvalue)

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**5);
console.log(2/9);
console.log(2%3);


let str1="hello"

let str2="welcome"

console.log(str1 + str2)
console.log("21" + 45)

console.log("1" + 2 + 2);
console.log(1+ 3 + "5")

console.log((3 + 4) * (5 % 2));
console.log(+true)//1
console.log(+"")//0



let n1,n2,n3;

n1=n2=n3=67+2
   
console.log(n1,n2,n3)
let gamecounter=78
gamecounter++;
console.log(gamecounter);