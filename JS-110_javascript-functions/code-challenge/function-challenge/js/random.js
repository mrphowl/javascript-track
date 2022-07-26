/**
 * JS-110: JavaScript Functions
 * 
 * Code challenge: Function challenge
 */
const main = document.querySelector('main');

function isNumeric(arg) {
  if ( typeof arg === 'number' ) {
    return true;
  }
  return false;
}

/**
 * Returns a random number between two numbers.
 *
 * @param {number} lower - The lowest number value.
 * @param {number} upper - The highest number value.
 * @return {number} The random number value.
 */
function randomNumber(lower, upper) {
  if ( isNumeric(lower) && isNumeric(upper) && !isNaN(lower) && !isNaN(upper) ) {
    return Math.floor(Math.random() * (upper - lower + 1)) + lower;
  } else {
    console.log('All arguments must be a number.');
    return false;
  }
}

// Call the function and pass it different values
let lower = 1;
let upper = 6;
let randNum = randomNumber(lower, upper);
let mes = `<p>${randNum} is a number between ${lower} and ${upper}.</p>`;

main.innerHTML += mes;
console.log(mes);

lower = 0;
upper = 100;
main.innerHTML += `<p>${randomNumber(lower, upper)} is a number between ${lower} and ${upper}.</p>`;

lower = 5;
upper = 67;
randNum = randomNumber(lower, upper);

if (randNum !== false && randNum !== NaN) {
  main.innerHTML += `<p>${randNum} is a number between ${lower} and ${upper}.</p>`;
} else {
  main.innerHTML += `<p>All arguments must be a numeric value. Input: ${lower} and ${upper}</p>`
}