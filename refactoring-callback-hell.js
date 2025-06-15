function runCallbackHell() {
  setTimeout(() => {
    console.log("1");
    setTimeout(() => {
      console.log("2");
      setTimeout(() => {
        console.log("3");
      }, 1000);
    }, 1000);
  }, 1000);
}

function delayLog(value, delay) {
  return new Promise((res) => {
    setTimeout(() => {
      console.log(value);
      res();
    }, delay);
  });
}

function escapeCallbackHellWithPromise() {
  delayLog("1", 1000)
    .then(() => delayLog("2", 1000))
    .then(() => delayLog("3", 1000));
}
