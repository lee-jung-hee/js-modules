const nums = [
  37, 12, 45, 3, 28, 7, 22, 49, 31, 14, 5, 41, 26, 9, 18, 33, 46, 1, 30, 24,
];

// ascending order
const ascNumbers = nums.toSorted((a, b) => a - b);

// descending order
const desNumbers = nums.toSorted((a, b) => b - a);
