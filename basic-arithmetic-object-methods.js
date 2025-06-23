const operators = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b,
};

const arithmetic = (num1, num2, operator) => {
  return operators[operator](num1, num2);
};

arithmetic(5, 3, "*"); // 15
