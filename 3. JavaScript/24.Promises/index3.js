//promise all
//Waits for all promises to resolve.
const p1 = Promise.resolve(1);
const p2 = Promise.reject(2);
const p3 = Promise.resolve(3);

Promise.all([p1, p2, p3])
  .then(results => console.log("All resolved:", results))
  .catch(err => console.error("One failed:", err));
