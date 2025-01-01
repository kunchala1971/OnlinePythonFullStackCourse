//1)values:this method returns an iterator that provides the values for each index in the array. 
// let a=[1,2,3,4,5];
let a=["Feb","Mar","Apr","May","Jun","Jan"];
const iter=a.values();
for(const value of iter)
{
	console.log(value);
}
//2)length: it returns the length of array
console.log(a.length);
//3)reverse:this method reverses the order of the elements in the array
console.log(a.reverse());
//4)sort:This method sorts the elements of an array in place and returns the sorted array.
console.log(a.sort());

let x=[1,2,3,10,11,12,13,14,20,21];
console.log(x.sort());
//5)at:this method returns the element at the specified index in the arrya.
console.log(x.at(0),x[0]);
//6)fill:this method fills all the elements of an array from a start index to and end index witha static value.It can take up to three arguments
const fruits=["Apples","Grapes","FineApple"];
fruits.fill("Mango",1,2);
console.log(fruits);
const nums=[1,2,3,4,5,6];
nums.fill(9,1,nums.length-1);
console.log(nums);
