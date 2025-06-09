const queue = {
  items: {},
  front: 0,
  rear: 0,

  enqueue(value) {
    this.items[this.rear] = value;
    this.rear++;
  },

  dequeue() {
    if (this.isEmpty()) {
      return;
    }
    const value = this.items[this.front];
    delete this.items[this.front];
    this.front++;
    return value;
  },

  peek() {
    return this.items[this.front];
  },

  isEmpty() {
    return this.front === this.rear;
  },
};

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.items); // { '0': 1, '1': 2, '2': 3 }
console.log(queue.dequeue()); // 1
console.log(queue.dequeue()); // 2
console.log(queue.peek()); // 3
console.log(queue.isEmpty()); // false
