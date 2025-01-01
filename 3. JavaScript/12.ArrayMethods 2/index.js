//from() object to array
const fruits={0:'Apples',1:"Grapes",2:"FineApple"};
const temp={...fruits,length:Object.keys(fruits).length}
console.log(temp);
console.log(Object.keys(temp).length);
const fruitArray=Array.from(temp);
console.log(fruitArray);