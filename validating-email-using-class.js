class Validator {
  static isEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}

console.log(Validator.isEmail("test@example.com")); // true
console.log(Validator.isEmail("invalid-email")); // false
