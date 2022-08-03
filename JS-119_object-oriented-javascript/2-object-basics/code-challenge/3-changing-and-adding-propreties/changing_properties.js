/**
 * JS-119: Object-Oriented JavaScript
 * 
 * Code challenge: Changing And Adding Properties
 */
const player1 = {
    name: 'Ashley',
    color: 'purple',
    isTurn: true,
    play: function(){
        if (this.isTurn) {
            console.log(`${this.name} is now playing!`);
         }
    }
};

const player2 = {
    name: 'Guil',
    color: 'red',
    isTurn: false,
    play: function(){
        if (this['isTurn']) {
            console.log(`${this['name']} is now playing!`);
        }
    }
};
// Task 1: On a new line after the existing code, change the value of the
// 'isTurn' property for player1 to false, using dot notation.
player1.isTurn = false;

// Task 2: On a new line after the existing code, change the value of the
// 'isTurn' property for player2 to true, using bracket notation.
player2['isTurn'] = true;
