const arr = ["apple", "banana", "orange", "banana"];
const newArr = arr.map((item) => (item === "banana" ? "kiwi" : item));
console.log(newArr);
