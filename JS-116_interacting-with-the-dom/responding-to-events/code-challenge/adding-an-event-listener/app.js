/**
 * JS-116: Interacting with the DOM - Responding to Events
 * 
 * Code challenge: Adding an Event Listener
 */
var warning = document.getElementById("warning");
// Task 1: Select the button with the ID makeItRed and assign it to the button variable.
const button = document.querySelector('#makeItRed');
// Task 2: Add a click event listener to button. Pass an empty function as the second parameter.
button.addEventListener('click', function (event) {
  // Task 3: In the button click handler, apply a background color of "red" to the warning div.
  warning.style.backgroundColor = 'red';
});
