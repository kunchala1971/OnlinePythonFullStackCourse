//from() object to array
const fruits={0:'Apples',1:"Grapes",2:"FineApple",3:"Banana"};
const temp={...fruits,length:Object.keys(fruits).length}
console.log("Temp:",temp);
console.log("Object Keys Length:",Object.keys(temp).length);
const fruitArray=Array.from(temp);
console.log(fruitArray);
const myArray=[];
Object.keys(fruits).forEach((item)=>{
myArray.push(fruits[item])
})
console.log(myArray);