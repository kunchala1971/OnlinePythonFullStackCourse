//Error Handling in Async/Await
async function loadData() {
  try {
    const data = await Promise.reject("Something went wrong!");
    console.log(data);
  } catch (error) {
    console.error("Caught error:", error);
  }
}

loadData();

