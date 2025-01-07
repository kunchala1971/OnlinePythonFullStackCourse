// const data=[100,"Sree","JavaScript"];
// console.log(data);
// const obj=data.entries();
// console.log(obj);
// console.log(obj.next().value);
// console.log(obj.next().value);
// console.log(obj.next().value);

//reduce,reduceRight
const red=[1,2,3,4,5,6,7,8,9,10];
// const sumValue=red.reduce((acc,curValue)=>{
// 	return acc+(curValue*2);
// })
const sumValue=red.reduceRight((acc,curValue)=>{
	return acc+(curValue*2);
})
console.log(sumValue);

//isArray()
const name="Sree";
 console.log(Array.isArray(red));
console.log(Array.isArray(name));