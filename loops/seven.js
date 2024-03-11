const mynums=[1,2,3,4]
let initialVal=0
// let sumoutput=mynums.reduce(function (acc,curval){
//     console.log(`${acc} is accumulator value and current value is ${curval}`);
//  return acc+curval
// },initialVal)

// console.log(sumoutput);
// let total=mynums.reduce((acc,cur)=>(acc+cur),5)
// console.log(total);

const shoppingCart=[
    {
        itemName:'js course',
        price:1500
    },
    {
        itemName:'mobile dev course',
        price:9000
    },
    {
        itemName:'data science course',
        price:12000
    },{
        itemName:'full stack  course',
        price:9000
    }
    
]
let total=shoppingCart.reduce((acc,item)=>(acc+item.price),0)
console.log(total);