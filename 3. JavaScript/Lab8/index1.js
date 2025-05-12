let playername = "Rohit";
let score =100;
var result = `${playername} played score is ${score}, he got rank is `;
if (score === 0) {
  result = result + " dockout";
} else if (score > 0 && score < 50) {
  result = result + " Below 50";
} else if (score === 50) {
  result = result + " 50";
} else if (score > 50 && score < 100) {
  result = result + " above 50 and below 100";
} else if (score === 100) {
  result = result + " Century";
} else if (score > 100 && score < 150) {
  result = result + " Above Century below one-half Century";
} else if (score === 150) {
  result = result + " one-half Century";
} else if (score > 150 && score < 200) {
  result = result + " above one-half Century and below double century";
} else if (score === 200) {
  result = result + "  double century";
} else if (score > 200) {
  result = result + " Above double century";
}

console.log(result);
