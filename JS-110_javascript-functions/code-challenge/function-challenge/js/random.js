/**
 * JS-110: JavaScript Functions
 * 
 * Code challenge: Function challenge
 */
const main = document.querySelector('main');
const lower = 1;
const upper = 6;

/**
 * Returns a random number between two numbers.
 *
 * @param {number} lower - The lowest number value.
 * @param {number} upper - The highest number value.
 * @return {number} The random number value.
 */
function randomNumber(lower, upper) {
  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}

// Call the function and pass it different values
const randNum = randomNumber(lower, upper);

// Output
const mes = `<p>${randNum} is a number between ${lower} and ${upper}.</p>`;
main.innerHTML = mes;
console.log(mes);
