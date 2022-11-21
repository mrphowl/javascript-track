// Guess the number
let guesses = 0;
let answer;
let number;
let gameOver = false;

alert('I am thinking of a number from 1 to 20.');

number = Math.ceil(Math.random() * 20);
console.log(`number: ${number}`);

while ( ! gameOver && guesses < 3 ) {
  answer = prompt("Guess the number");
  guesses++;

  console.log(`${number}, ${answer}`);

  if ( Number(answer) === number ) {
    alert('You got it!');
    gameOver = true;
  } else {
    if ( guesses === 3 ) {
      alert(`Sorry, the number is ${number}.`);
    } else {
      alert('Sorry, try again.');
      answer = undefined;
    }
  }
}
