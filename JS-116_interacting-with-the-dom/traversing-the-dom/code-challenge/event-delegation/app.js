/**
 * JS-116: Interacting with the DOM - Traversing the DOM
 * 
 * Code challenge: Event Delegation
 */
const section = document.getElementsByTagName('section')[0];

section.addEventListener('click', (e) => {
  // Task 1: Add a condition that changes the background of the <input> elements only.
  if( e.target.tagName === 'INPUT' ) {
    e.target.style.backgroundColor = 'rgb(255, 255, 0)';
  }
});
