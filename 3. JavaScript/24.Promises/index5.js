//promise race
//Returns the result of the first settled (resolved or rejected) promise.
const p1 = new Promise(resolve => setTimeout(() => resolve("P1 done"), 500));
const p2 = new Promise(resolve => setTimeout(() => resolve("P2 done"), 300));

Promise.race([p1, p2])
  .then(result => console.log("Race winner:", result));
