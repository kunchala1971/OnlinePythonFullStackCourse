let a=[1,2,3,4];
let b=[5,6,7,8];
let d=a;//shallow copy
let e=[...a];
//let c=a.concat(b);
let c=[...a,...b];//deep copy
console.log(a);
console.log(b);
console.log(c);
console.log(d);
a.push(10);
console.log(a);
console.log(d);
