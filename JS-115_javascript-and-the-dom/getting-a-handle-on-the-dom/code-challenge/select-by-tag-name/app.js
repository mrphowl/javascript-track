/**
 * JS-115: JavaScript and the DOM
 * 
 * Code challenge: Select By Tag Name
 */
// Complete the challenge by writing JavaScript below

const colors = ["#C2272D", "#F8931F", "#FFFF01", "#009245", "#0193D9", "#0C04ED", "#612F90"];
// Task 1: Complete the code by setting the variable listItems to refer to an HTMLCollection. The collection should contain all list items in the <ul> element.
let listItems = document.getElementsByTagName('li');

for ( let i = 0; i < colors.length; i++ ) {
  listItems[i].style.color = colors[i];    
}