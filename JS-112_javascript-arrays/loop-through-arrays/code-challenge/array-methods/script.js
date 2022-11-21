/**
 * JS-112: JavaScript Arrays - Loop Through Arrays
 * 
 * Code challenge: Array Methods
 */
const planets = ['Earth','Mars','Saturn','Mercury','Jupiter','Venus','Uranus','Neptune'];
// Task 1: Use the array method that combines all of the elements inside the planets array into a single string. The final string should separate the array elements by a comma and space. Log the final string value to the console.
const combined = planets.join(', ');
console.log(combined);
// Task 2: use the method that returns the position of 'Saturn' in the planets array. Log the return value to the console.
const saturn = planets.indexOf('Saturn');
console.log(saturn);
