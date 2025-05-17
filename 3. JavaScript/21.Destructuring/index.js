//Array Destructuring
// let a=[100,"SrinivasaRao","EnggII","Ongole"];
// let [code,name,desig,city]=a;
// console.log("Code:",code);
// console.log("Name:",name);
// console.log("Desig:",desig);
// console.log("City:",city);
// let b=[45,56,67];
// let [x,,y]=b;
// console.log("X=",x);
// console.log("Y=",y);

//Object Destructuring

// const person={id:1,"name":"Srinivasarao","desig":"EnggII"};
// const {id,desig}=person;
//  console.log("ID:",id);
//  //console.log("Name:",name);
//  console.log("Desig:",desig);

const person = {
  person_details: {
    id: 1,
    name: "Sree",
    city: "Ongole",
  },
  person_address: {
    desig: "EnggII",
    city: "Hyderabda",
  },
};

const {city}=person.person_address;
console.log("Ciyt=",city);