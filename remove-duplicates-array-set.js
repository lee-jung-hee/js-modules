const fruits = ["🍌", "🍎", "🍇", "🍌", "🍎", "🍑"];

function removeDuplicates(array) {
  return [...new Set(array)];
}
console.log(removeDuplicates(fruits)); //  ['🍌', '🍎', '🍇', '🍑']
