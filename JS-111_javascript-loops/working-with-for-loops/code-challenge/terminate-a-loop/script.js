/** JS-111: JavaScript Loops
 * 
 * Code challenge: Terminate a Loop
 */
let message = "supercalifragilisticexpialidocious";
message = message.length;

console.log(`${message} ${message / 2}`);

for ( let i = 1; i < message; i++ ) {
  if ( i === message / 2 ) {
    console.log('The loop has terminated...');
    // Task 1: Add the statement that immediately terminates the for loop if
    // the value of i is equal to message / 2 (half the length value).
    break;
  }
  console.log(`Logging the number ${i}`);
}

console.log('The program continues...');
