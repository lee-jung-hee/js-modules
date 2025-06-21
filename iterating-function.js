function iterate(max, action) {
  for (let i = 0; i < max; i++) {
    action(i);
  }
}

iterate(3, (num) => console.log(num));
iterate(3, (num) => console.log(num * 2));
