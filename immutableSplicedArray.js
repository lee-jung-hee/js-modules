const arr = ["a", "b", "c", "d", "e", "f"];
const changeArr = arr.toSpliced(1, 1, "x"); // [ 'a', 'x', 'c', 'd', 'e', 'f' ]
const deleteArr = arr.toSpliced(1, 1); // [ 'a', 'c', 'd', 'e', 'f' ]
const appendArr = arr.toSpliced(1, 0, "x", "y"); // [ 'a', 'x', 'y', 'b', 'c', 'd', 'e', 'f' ]
console.log(arr); // [ 'a', 'b', 'c', 'd', 'e', 'f' ]
