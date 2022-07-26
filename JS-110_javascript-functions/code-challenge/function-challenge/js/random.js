/**
 * JS-110: JavaScript Functions
 * 
 * Code challenge: Function challenge
 */
const main = document.querySelector('main');

/**
 * Returns a random number between two numbers.
 *
 * @param {number} lower - The lowest number value.
 * @param {number} upper - The highest number value.
 * @return {number} The random number value.
 */
function randomNumber(lower, upper) {
  if ( isNaN(lower) || isNaN(upper) ) {
    throw Error('All arguments must be a number.');
  }
  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}

// Call the function and pass it different values
let lower = 1;
let upper = 6;
main.innerHTML += `<p>${randomNumber(lower, upper)} is a number between ${lower} and ${upper}.</p>`;

lower = 0;
upper = 100;
main.innerHTML += `<p>${randomNumber(lower, upper)} is a number between ${lower} and ${upper}.</p>`;

lower = 'five';
upper = 67;
main.innerHTML += `<p>${randomNumber(lower, upper)} is a number between ${lower} and ${upper}.</p>`;

lower = -4;
upper = 67;
main.innerHTML += `<p>${randomNumber(lower, upper)} is a number between ${lower} and ${upper}.</p>`;
