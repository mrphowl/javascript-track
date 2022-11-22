/**
 * JS-119: Object-Oriented JavaScript
 * 
 * Code challenge: Filling out the play method
 */
const player1 = {
  name: 'Elie',
  color: 'Orange',
  isTurn: true,
  // Task 1: Inside the play method, write an empty if statement that checks if
  // it's the players turn. Use dot notation.
  play: function() {
    // Task 2: Inside the if statement, return a string equal to the value of
    // the name property followed by the string " is now playing!". Use bracket
    // notation.
    if(this.isTurn) {
      return this['name'] + ' is now playing!';
    }
  }
}
