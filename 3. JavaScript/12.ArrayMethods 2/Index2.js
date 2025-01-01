//pop(): it removes the last element of the array
const nums=[1,2,3,4,5,6,7];
console.log(nums);
nums.pop();
console.log(nums);
//forEach()
var x=0;
nums.forEach((num)=>console.log(num));
nums.forEach((element)=>
	{
		x=x+element;
		console.log(x)
	});

//push() to push elements at end of the array
nums.push(8);
console.log(nums);
//unshift() to add the element at begining of the array
nums.unshift(0);
console.log(nums);
//shift() to removes the first element of the array
nums.shift();
console.log(nums);


