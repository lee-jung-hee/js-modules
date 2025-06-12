function generateNumbers() {
  let arr = [];
  while (arr.length < 6) {
    let num = Math.ceil(Math.random() * 45);
    if (arr.includes(num) === false) {
      arr.push(num);
    }
  }
  arr.sort((a, b) => a - b);
  return arr;
}
