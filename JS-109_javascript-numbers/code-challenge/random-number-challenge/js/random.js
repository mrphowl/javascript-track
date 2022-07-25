/* JS-109: JavaScript Numbers - The Math Object

Code challenge: Random Number Challenge
*/
const main = document.querySelector('main');

// Collect input from a user
const input = prompt('Please input a number greater than 1.');

// Convert the input to a number
const numRange = parseInt(input);

if ( numRange < 2) {
  main.innerHTML = 'The input must be a number greater than 1. Refresh the page to try again.';
} else {
  // Use Math.random() and the user's number to generate a random number
  const randomNumber = Math.floor(Math.random() * numRange) + 1;

  // Create a message displaying the random number
  console.log(`${randomNumber} is a number between 1 and ${numRange}.`);
  main.innerHTML = `<p>${randomNumber} is a number between 1 and ${numRange}.</p>`;
}
