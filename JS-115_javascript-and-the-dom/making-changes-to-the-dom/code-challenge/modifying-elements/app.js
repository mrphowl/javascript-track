/**
 * JS-115: JavaScript and the DOM - Making Changes to the DOM
 * 
 * Code Challenge: Modifying Elements
 */
// Task 1: Select the <input> element and assign its value to the variable inputValue.
const inputValue = document.querySelector('input').value;
// Task 2: Set the text content of the <p> element with the class info to the value stored in inputValue.
document.querySelector('p').textContent = inputValue;
