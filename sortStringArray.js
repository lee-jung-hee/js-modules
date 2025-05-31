const names = [
  "Olivia",
  "Ethan",
  "Sophia",
  "Liam",
  "Ava",
  "Noah",
  "Mia",
  "James",
  "Isabella",
  "Benjamin",
];
// ascending order
const ascNames = names.toSorted();

// descending order
const desNames = names.toSorted((a, b) => b.localeCompare(a));
