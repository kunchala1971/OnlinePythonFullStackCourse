//promise all settled
//Waits for all promises to finish, regardless of resolved/rejected.
const p1 = Promise.resolve("Success");
const p2 = Promise.reject("Error");
const p3 = Promise.resolve("Another success");

Promise.allSettled([p1, p2, p3])
  .then(results => console.log(results));
