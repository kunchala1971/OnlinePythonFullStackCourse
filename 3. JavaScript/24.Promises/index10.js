//Custom Retry with Promise
function retryPromise(fn, retries = 3) {
  return fn().catch(err => {
    if (retries > 0) {
      return retryPromise(fn, retries - 1);
    } else {
      throw err;
    }
  });
}

// Usage
retryPromise(() => Promise.reject("Failing..."), 2)
  .then(res => console.log("Success:", res))
  .catch(err => console.error("Final failure:", err));
