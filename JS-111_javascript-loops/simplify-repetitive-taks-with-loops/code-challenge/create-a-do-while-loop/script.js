/** JS-111: JavaScript Loops
 * Code challenge: Create a Do...While Loop
 */
// Task 1: Add a do...while loop that keeps displaying the prompt dialog until the user types 'sesame'.

// Display the prompt dialogue while the value assigned to `secret` is not equal to "sesame"
let secret;
do {
  secret = prompt("What is the secret password?");
} while( secret !== 'sesame' )
// This should run after the loop is done executing
alert("You know the secret password. Welcome!");
