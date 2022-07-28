/**
 * JS-112: JavaScript Arrays - Loop Through Arrays
 * 
 * Code challenge: Build A Qiuz Challenge
 */
// 1. Create a multidimensional array to hold quiz questions and answers
const quizItems = [
  [
    'The sun is the center of the solar system. (true or false)',
    'true'
  ],
  [
    'I was once a cucumber. (yes or no)',
    'yes'
  ],
  [
    'What never asks a question but gets answered all the time?',
    'cellphone'
  ],
  [
    'What can one catch that is not thrown?',
    'cold'
  ],
  [
    'Everyone in the world needs it, but they usually give it without taking it. What is it?',
    'advice'
  ],
];

// 2. Store the number of questions answered correctly
let correct = 0;

/* 
  3. Use a loop to cycle through each question
      - Present each question to the user
      - Compare the user's response to answer in the array
      - If the response matches the answer, the number of correctly
        answered questions increments by 1
*/
for ( let i = 0; i < quizItems.length; i++ ) {
  if ( prompt(quizItems[i][0]).toLowerCase() === quizItems[i][1] ) {
    correct++;
  }
}

// 4. Display the number of correct answers to the user
document.querySelector('h1').innerHTML = `You got ${correct} correct ${correct > 1 ? 'answers' : 'answer'}.`;
