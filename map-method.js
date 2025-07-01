const arr = ["strawberry", "banana", "kiwi"];
function makeJuice(fruit) {
  return fruit + " juice";
}
const juiceArr = arr.map(makeJuice);
const smoothieArr = arr.map((item) => item + " smoothie");
console.log(juiceArr); // [ 'strawberry juice', 'banana juice', 'kiwi juice' ]
console.log(smoothieArr); // [ 'strawberry smoothie', 'banana smoothie', 'kiwi smoothie' ]

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

const fruitName = fruit.map((item) => item.name);
console.log(fruitName); // ['strawberry', 'banana', 'kiwi', 'apple', 'blueberry', 'orange', 'grape', 'lemon', 'cherry', 'watermelon']
