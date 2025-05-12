var a=45,b=4,choice=2;
console.log("1.Addition");
console.log("2.Subtraction");
console.log("3.Multiplication");
console.log("4.Division");
console.log("5.Modulus");
switch(choice)
{
	case 1:
		console.log(`${a} + ${b} = ${a+b}`);
		break;
	case 2:
		console.log(`${a} - ${b} = ${a-b}`);
		break;
	case 3:
		console.log(`${a} X ${b} = ${a*b}`);
		break;
	case 4:
		console.log(`${a} / ${b} = ${a/b}`);
		break;
	case 5:
		console.log(`${a} % ${b} = ${a%b}`);
		break;
	default:
		console.log("Your selected choice is out of range");
}