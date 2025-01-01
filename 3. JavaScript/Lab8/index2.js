//the given number prime or not
let n = 18;
let i = 2;
let count = 0;
while (i < n) {
  if (n % i == 0) {
    count++;
  }
  i++;
}
console.log(
  "Count is " + count + " " + n + " " + (count === 0 ? "prime" : "notprime")
);
