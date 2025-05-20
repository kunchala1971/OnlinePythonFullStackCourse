//Promise.any(ES2021)
//Returns the first fulfilled promise (ignores rejections).
const p1 = Promise.reject("Error 1");
const p2 = Promise.resolve("Success");
const p3 = Promise.reject("Error 2");

Promise.any([p1, p2, p3])
  .then(result => console.log("Any success:", result))
  .catch(error => console.error("All rejected:", error));
