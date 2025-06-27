// Private fields must be prefixed with #
class Fruit {
  #name;
  #emoji;
  constructor(name, emoji) {
    this.#name = name;
    this.#emoji = emoji;
  }

  display = () => {
    console.log(`${this.#name}: ${this.#emoji}`);
  };
}
const apple = new Fruit("apple", "🍎");
// Private fields cannot be accessed from outside the class like below
// apple.#name = "orange";
console.log(apple); // Fruit { display: [Function: display] }
apple.display(); // apple: 🍎
