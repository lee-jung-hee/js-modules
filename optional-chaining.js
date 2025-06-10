let obj = { name: "🙈", owner: { name: "Tom" } };
function printName(obj) {
  // const ownerName = obj && obj.owner && obj.owner.name;
  // The line of code above can be simplified like the one below using optional chaining.
  const ownerName = obj?.owner?.name;
  console.log(ownerName);
}
printName(obj); // Tom
printName(); // undefined
