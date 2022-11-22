/**
 * JS-112: JavaScript Arrays - Loop Through Arrays
 * 
 * Code challenge: Loop Through an Object's Properties
 */
const composer = {
  name: 'Edward Ellington',
  nickname: 'Duke',
  genres: ['jazz', 'swing'],
  instrument: 'piano'
};
// Task 1: Use a for...in loop to log each of the property names of the composer object to the console.
for(let prop in composer) {
  // Task 2: Include the property value in the log
  console.log(`${prop}: ${composer[prop]}`);
}
