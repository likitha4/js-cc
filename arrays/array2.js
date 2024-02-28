const marvel=["thor","ironman","spiderman"]
const dc=["superman","batman","flash"]

// marvel.push(dc)
console.log(marvel);
// console.log(marvel[3][2]);
const mc=marvel.concat(dc)
console.log(" abc", mc);
const hs=[...marvel,...dc]
console.log(hs);

const anarr=[1,2,3,[4,5,6,7],89,[-1,0,-4]]
console.log(anarr.flat(Infinity));
console.log(Array.isArray(anarr));
console.log(Array.isArray("well"));
console.log(Array.from("well"));

console.log(Array.from({name:"well"}));
const mn=765
const mnb=876
console.log(Array.of(mn,mnb));

