/**
 * JS-117: AJAX Basics: Programming AJAX
 * 
 * Code challenge: Create a callback
 */
const xhr = new XMLHttpRequest();
// Task 1: Add an onreadystatechange event handler. Add an anonymous function, but don't put any code inside it.
xhr.onreadystatechange = function() {};
xhr.open('GET', 'sidebar.html');
xhr.send();
