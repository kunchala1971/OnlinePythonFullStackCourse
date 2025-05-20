//Promise Chaining
function addOne(x) {
  return new Promise(resolve => resolve(x + 1));
}

addOne(1)
  .then(addOne)     // 2
  .then(addOne)     // 3
  .then(result => console.log("Final result:", result));
