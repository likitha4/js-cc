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