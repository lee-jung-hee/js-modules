// make a stack
const stack = [];

// Add data
const enqueue = (data) => stack.push(data);

// Remove data
const dequeue = () => stack.pop();

// Peek at the Top of the Stack
const peek = () => stack[stack.length - 1];

// Check if the Stack is Empty
const isEmpty = () => stack.length === 0;

enqueue(1);
enqueue(2);
enqueue(3);
console.log(stack); // [ 1, 2, 3 ]
dequeue();
dequeue();
console.log(stack); // [ 1 ]
console.log(peek()); // 1
console.log(isEmpty()); // false
