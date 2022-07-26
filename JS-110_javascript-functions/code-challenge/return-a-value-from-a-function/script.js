/* JS-110: JavaScript Functions

Code challenge: Return A Value From A Function
*/
// Task 1: Create a function named getYear. Do not add any code inside the function yet.
function getYear() {
  /* Task 2: Inside the function's code block, add the following line of code:

    const year = new Date().getFullYear();
    
    This creates a new variable and stores the current year in it. Now, add a statement that returns this variable from the function.
  */
  const year = new Date().getFullYear();
  return year;
}

// Task 3: Finally, call the getYear function. Store the returned value of the function in a new variable named yearToday.
const yearToday = getYear();
// Check the stored value
alert(yearToday);
