//copyWithin
let num=[1,2,3,4,5,6];
console.log(num);
num.copyWithin(2,0,2);//copyWithin(noofelements,position begin,postion end)
console.log(num);
//concat
let odds=[1,3,5];
let evens=[2,4,6];
//let allnums=odds.concat(evens);
 let allnums=[...odds,...evens];//spread operator
console.log(odds);
console.log(evens);
console.log(allnums);