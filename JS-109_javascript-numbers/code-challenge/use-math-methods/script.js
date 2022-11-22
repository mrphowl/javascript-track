/* JS-109: JavaScript Numbers - The Math Object */
/*
Code challenge: Use Math Methods
*/
const temperature = 37.5;
// Task 1: For this Code Challenge you need to use JavaScript's Math methods. Declare a new variable named `tempRounded`. Assign it the temperature variable rounded to the nearest integer.
const tempRounded = Math.round(temperature);
// Task 2: Next, declare a new variable named tempRoundDown. Assign it the temperature variable rounded downward to the nearest integer.
const tempRoundDown = Math.floor(temperature);

console.log(`tempRounded: ${tempRounded}`);
console.log(`tempRoundDown: ${tempRoundDown}`);
