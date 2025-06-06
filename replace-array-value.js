function replace(array, from, to) {
  const replaced = Array.from(array);
  for (let i = 0; i < replaced.length; i++) {
    if (replaced[i] === from) {
      replaced[i] = to;
    }
  }
  return replaced;
}

const arr = ["a", "b", "c", "b"];
const newArr = replace(arr, "b", "s");
console.log(newArr);
