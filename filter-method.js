const arr = ["strawberry", "banana", "kiwi"];
function banana(fruit) {
  if (fruit === "banana") return fruit + " juice";
}
const bananaArr = arr.filter(banana);
const kiwiArr = arr.filter((item) => item === "kiwi");
console.log(bananaArr); // [ 'banana' ]
console.log(kiwiArr); // [ 'kiwi' ]

const fruit = [
  { name: "strawberry", color: "red", size: 2 },
  { name: "banana", color: "yellow", size: 5 },
  { name: "kiwi", color: "green", size: 3 },
  { name: "apple", color: "red", size: 4 },
  { name: "blueberry", color: "blue", size: 1 },
  { name: "orange", color: "orange", size: 4 },
  { name: "grape", color: "purple", size: 2 },
  { name: "lemon", color: "yellow", size: 3 },
  { name: "cherry", color: "red", size: 2 },
  { name: "watermelon", color: "green", size: 8 },
];

const bigFruit = fruit.filter((item) => item.size > 3).map((item) => item.name);
console.log(bigFruit); // [ 'banana', 'apple', 'orange', 'watermelon' ]
