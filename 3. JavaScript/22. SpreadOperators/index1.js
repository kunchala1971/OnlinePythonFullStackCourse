//Object spread operators
//deep copy shallow copy
const person={
    id:1,
    name:"Sree",
    desi:"EngII"
};
const details={
    city:"ongole",
    state:"AP",
    country:"IN"
};
const person_details={...person,...details};
console.log(person);
console.log(details);
console.log(person_details);
//const rao=person_details;//shallow copy
//const rao={...person_details};//Deep copy
const rao=JSON.parse(JSON.stringify(person_details));
console.log(rao);
person_details["language"]="Eng";
console.log(person_details);
console.log(rao);

console.log(x);

