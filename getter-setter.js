// Getters and setters are called "accessor properties".
// They look like properties but are actually methods.
class Student {
  constructor(firstName, lastName) {
    // Instance properties: managed individually per object
    this.firstName = firstName; // Property
    this.lastName = lastName; // Property
    this.fullName2 = `${this.lastName} ${this.firstName}`; // Static value initialized once (won’t update)
  }

  // Accessor property (getter): behaves like a property but is actually a method
  get fullName() {
    return `${this.lastName} ${this.firstName}`;
  }

  // Accessor property (setter): triggered when a new value is assigned
  set fullName(value) {
    console.log("set :", value);
    const parts = value.split(" "); // Split the input by space
    this.lastName = parts[0];
    this.firstName = parts[1];
  }
}

const student = new Student("susie", "kim");

// Update regular property (firstName can be modified directly)
student.firstName = "Anna";
console.log(student.firstName); // Anna

// Getter call: looks like a property but actually calls the fullName() method
console.log(student.fullName); // kim Anna

// Initialized property fullName2 doesn’t update dynamically (static value)
console.log(student.fullName2); // kim susie

// Setter call: assigning a new value triggers the setter method
student.fullName = "cho lee"; // set : cho lee
console.log(student.fullName); // cho lee
