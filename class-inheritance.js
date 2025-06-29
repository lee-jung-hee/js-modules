class Animal {
  constructor(color) {
    this.color = color;
  }
  eat() {
    console.log("Eat!");
  }
  sleep() {
    console.log("Sleep!");
  }
}

// Tiger class inherits from Animal
class Tiger extends Animal {}

const tiger = new Tiger("Pink");
console.log(tiger); // Tiger { color: 'Pink' }
tiger.sleep(); // Sleep!
tiger.eat(); // Eat!

// Dog class extends Animal
class Dog extends Animal {
  constructor(color, ownerName) {
    // When a subclass defines a constructor,
    // it must call super() with the parent's constructor arguments
    super(color);
    this.ownerName = ownerName;
  }

  play() {
    console.log("Play!");
  }

  // Overriding the eat method from the parent class
  eat() {
    super.eat(); // Call the parent class's eat method first
    console.log("Do eat!!"); // Then add additional behavior
  }
}

const dog = new Dog("Green", "Thomas");
console.log(dog); // Dog { color: 'Green', ownerName: 'Thomas' }
dog.sleep(); // Sleep!
dog.eat(); // Eat! Do eat!!
dog.play(); // Play!
