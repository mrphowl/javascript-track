/**
 * JS-115: JavaScript and the DOM
 * 
 * Code challenge: Select By ID
 */
// Complete the challenge by writing JavaScript below

// Task 1: Declare a variable named button. Assign the variable the <button> element with the ID btn-phrase. Use the method that returns an element matching the specified ID.
const button = document.getElementById('btn-phrase');

// Task 2: Declare a new variable named input. Point the variable to the input element with the ID input-phrase. Use the method that returns an element matching the specified ID.
const input = document.getElementById('input-phrase');

button.addEventListener('click', () => {
  alert(input.value);
});