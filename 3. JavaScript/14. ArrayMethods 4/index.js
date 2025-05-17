//find
const nums=[10,20,30,40,50,60];
const result=nums.find((element)=>element>40);
//  const checkValue=(element)=>element>40;
//  const result=nums.find(checkValue);
console.log(result);

//includes
const nums1=[10,20,30,40,50,60];
const result1=nums1.includes(30);
console.log(result1);
const names=["ram","sita","kiran","radha"];
const result2=names.includes("sitas");
console.log(result2);