//Async/Await with Promises
function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Fetched data!"), 1000);
  });
}

// async function loadData() {
//   const data = await fetchData();
//   console.log(data);
// }
const loadData = async () => {
  const data = await fetchData();
  console.log(data);
};

loadData();
