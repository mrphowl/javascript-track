/* JS-109: JavaScript Numbers - The Math Object

Code challenge: Random Number Challenge
*/
const main = document.querySelector('main');
const mesTryAgain = 'Refresh the page to try again.';
const mesInputShouldBeNumbers = 'Both input should be a number.';
const mesNumbersShouldBeDifferent = 'The input should not be the same.';
// Collect input from a user
const input1 = prompt('Please input a number.');
const input2 = prompt('Please input another number.');

// Convert the input to a number
const numRange1 = parseInt(input1);
const numRange2 = parseInt(input2);

if (numRange1 && numRange2) {
  let upperLimit;
  let lowerLimit;
  // Arrange the numbers. The lower value should be the lower limit and the
  // higher number should be the upper limit of the range.
  if(numRange2 > numRange1) {
    lowerLimit = numRange1;
    upperLimit = numRange2;
  } else if (numRange1 > numRange2) {
    lowerLimit = numRange2;
    upperLimit = numRange1;
  }
  // Do not allow equal values
  if (numRange1 === numRange2) {
    main.innerHTML = `<p>${mesInputShouldBeNumbers} ${mesTryAgain}</p>`;
  } else {
    const rand = Math.floor(Math.random() * (upperLimit - lowerLimit + 1) + lowerLimit);    

    main.innerHTML = `<p>${rand} is a number between ${lowerLimit} and ${upperLimit}.</p>`;
  }
} else {
  main.innerHTML = `<p>${mesInputShouldBeNumbers} ${mesTryAgain}</p>`;
}
