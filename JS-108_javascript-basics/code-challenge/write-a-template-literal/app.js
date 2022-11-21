// Challenge: Write a template literal
// Task 1: Convert the set of concatenated strings assigned to the drink variable to a template literal. The final string should be "Blueberry Smoothie: $4.99".
const flavor = "Blueberry";
const type = "Smoothie";
const price = 4.99;

// const drink = flavor + ' ' + type + ': ' + '$' + price;
const drink = `${flavor} ${type}: $${price}`;
console.log(drink);
