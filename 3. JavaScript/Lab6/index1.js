let msg="K.SrinivasaRao";
console.log(msg.length);
let result='';
let n=msg.length;
// for(let i=0;i<n;i++)
// {
// 	result+=msg.charAt(n-(i+1));
// }
for(let i=n-1;i>=0;i--)
	{
		result+=msg.charAt(i);
	}
console.log(result);