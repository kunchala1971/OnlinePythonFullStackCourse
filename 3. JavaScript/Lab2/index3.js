//Hoisting is a mechanisam it moves the declations and functions at top of the progrm while execution 
//(es5 or below version commands only)
a=100;
console.log(a);
var a=100;

// console.log(b);
// let b;
function sum(a,b)
{
	return(a+b);
}
console.log(sum(10,20));

const mydouble=(a)=>a*a;
console.log(mydouble(10));


const abc=10;
console.log(abc);
// abc=450;
