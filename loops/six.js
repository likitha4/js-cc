const mynums=[1,2,3,4,5,6,7,8,9,10]

// let newnums=mynums.map((num)=>num+10)

// let newnums=mynums.map((num)=>{ return num+10})

// newnums=[]
// mynums.forEach((item)=>{
//     item=item+10
//     newnums.push(item)
//     console.log(item);
// })
// console.log(newnums);

let newnums=mynums
                .map((num)=>num*10)
                .map((num)=>num+20)
                .filter(Element=>Element>70)

 console.log(newnums);