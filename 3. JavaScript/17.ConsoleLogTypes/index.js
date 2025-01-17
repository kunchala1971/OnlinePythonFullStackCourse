console.log("Hai console Log Bye Bye !");

let age = 25;
if (age < 26) {
  console.info("You are eligible ");
  console.warn("Your age is Nearest to Boundry");
} else {
  console.error("Your Age is Not Suitable");
}

const students = [
  { code: 100, name: "Ram", course: "JS" },
  { code: 101, name: "Sita", course: "JS" },
  { code: 102, name: "Hanuma", course: "JS" },
];
console.table(students);
console.group("My Details:");
console.log("Name: SrinivasaRao.K");
console.log("Course: JavaScript");
console.log("City: Hyd");
console.groupEnd();

console.time();
setTimeout(()=>{
	console.error("Set Time Out is completed");
	console.timeEnd();
},2000);


