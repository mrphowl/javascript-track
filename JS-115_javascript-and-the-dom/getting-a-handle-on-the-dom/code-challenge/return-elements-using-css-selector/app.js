/**
 * JS-115: JavaScript and the DOM
 * 
 * Code challenge: Return Elements Using CSS Selectors
 */
// Task 1: Select all <a> elements inside the <nav> element and assign them to the variable navigationLinks.
let navigationLinks = document.querySelectorAll('nav a');
// Task 2: Select all <a> elements inside the unordered list with the ID gallery and assign them to the variable galleryLinks.
let galleryLinks = document.querySelectorAll('#gallery a');
// Task 3: Select all images inside the footer element and assign them to the variable footerImages.
let footerImages = document.querySelectorAll('footer img');
