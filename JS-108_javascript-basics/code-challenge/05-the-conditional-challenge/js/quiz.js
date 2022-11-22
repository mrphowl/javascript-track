/* 
  1. Store correct answers
   - When quiz begins, no answers are correct
*/
let score = 0;

// 2. Store the rank of a player
const RANK_GOLD = 'Gold';
const RANK_SILVER = 'Silver';
const RANK_BRONZE = 'Bronze';
const RANK_NONE = 'No crown';
let rank = RANK_NONE;

// 3. Select the <main> HTML element
const main = document.querySelector('main');

/*
  4. Ask at least 5 questions
   - Store each answer in a variable
   - Keep track of the number of correct answers
*/
// A debate from Looney Toons
const answer1 = prompt('Is the Earth round or flat? (round or flat)');

if ( answer1.toLowerCase() === 'round' ) {
  score += 1;
}
// Put a programming question
const answer2 = prompt('Boolean data type evaluates to either true or false. (true or false)');

if ( answer2.toLowerCase() === 'true' ) {
  score += 1;
}
// Sing a song
const answer3 = prompt('Twinkle, twinkle little...');

if ( answer3.toLowerCase() === 'star' ) {
  score += 1;
}
// A - Z
const answer4 = prompt('Which comes first, the chicken or the egg? (chicken or egg)');

if ( answer4.toLowerCase() === 'chicken' ) {
  score += 1;
}
// Memories from the past life
const answer5 = prompt('I was once a cucumber. (true or true)');

if ( answer5.toLowerCase() === 'true' ) {
  score += 1;
}

/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/
if ( score === 5 ) {
  rank = RANK_GOLD;
} else if ( score >= 3 ) {
  rank = RANK_SILVER;
} else if ( score >= 1 ) {
  rank = RANK_BRONZE;
} else {
  rank = RANK_NONE;
}

// 6. Output results to the <main> element
const result = `<p>You got ${score} out of 5 answers.</p>`;
const ranking = `Your rank: ${rank.toUpperCase()}`;

main.innerHTML = result + ranking;
