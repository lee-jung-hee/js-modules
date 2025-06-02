let a = "abcdefghijklmnopqrstuvwxyz";
console.log(a.substring(1, 4)); // bcd
console.log(a.slice(1, 4)); // bcd
console.log(a.substring(4, 1)); // bcd
console.log(a.slice(4, 1)); // empty
console.log(a.substring(-4, -1)); // empty
console.log(a.slice(-4, -1)); // wxy
