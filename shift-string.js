const outputText = "12345";
const shiftString = (string, num = 1) => {
  let result = string.split("");
  for (let i = 0; i < num; i++) {
    const firstChar = result.shift();
    result.push(firstChar);
  }
  result = result.join("");
  return result;
};

shiftString(outputText, 1); // 23451
