//splice()
const nums=[1,2,3,4,5,6];
//array.splice(startpostion,deletedcount,add1,add2,..)
//nums.splice(2,2,9,99,199,299);
nums.splice(1,nums.length-2,"Ram","Sita","Kishna");
console.log(nums);
//flat()
const num=[1,[2,[3,[5]]],6];
console.log(num);
const flatNums=num.flat(Infinity);
console.log(flatNums);
