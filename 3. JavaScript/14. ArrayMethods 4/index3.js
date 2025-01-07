//Object.keys(),Object.values()
const person={
	id:100,
	name:"Sree",
	course:"JavaScript"
};
console.log(Object.keys(person));
console.log(Object.values(person));
//map
Object.keys(person).map((element)=>console.log(element));
Object.values(person).map((element)=>console.log(element));