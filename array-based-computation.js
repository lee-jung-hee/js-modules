const num = [5, 5, 5, 5, 5];
const ope = ["+", "-", "*", "/"];

const operators = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b,
};

let result = num[0];
for (let i = 1; i < num.length; i++) {
  result = operators[ope[i - 1]](result, num[i]);
}
