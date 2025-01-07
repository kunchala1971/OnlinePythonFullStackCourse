//copyWithin
let num=[1,2,3,4,5,6];
console.log(num);
num.copyWithin(3,0,3);
console.log(num);
//concat
let odds=[1,3,5];
let evens=[2,4,6];
let allnums=odds.concat(evens);
// let allnums=[...odds,...evens];
console.log(odds);
console.log(evens);
console.log(allnums);