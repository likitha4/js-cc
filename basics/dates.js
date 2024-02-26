
let mdate=new Date()
console.log(mdate.toString());
console.log(" 1",mdate.toISOString());
console.log("2",mdate.toDateString());
console.log("3",mdate.toLocaleString());
console.log(typeof mdate);

let cdate=new Date(2024,1,26,16,98)
console.log(cdate.toLocaleString());
let ndate=new Date("1-11-2023").toLocaleString()
console.log(ndate);

let mytimestamp=Date.now()
console.log(Math.floor(mytimestamp/1000));
console.log(cdate.getTime());
let cm=new Date();
console.log( cm.getMonth().toLocaleString());
console.log(cm.getDay());
newDate.toLocaleString('default',{
    weekday:"long",
})