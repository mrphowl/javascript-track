/* JS-110: JavaScript Functions
Code challenge: Create a max() Function
*/
// Task 1: Create a function named max that accepts two numbers as arguments (name the parameters whatever you would like). The function should return the larger of the two numbers.
function max(left, right) {
  left = parseInt(left);
  right = parseInt(right);

  if ( left > right ) {
    return left;
  } else if ( left < right ) {
    return right;
  }
  console.log('Both numbers are equal.')
}

// Task 2: Call the max function with two number arguments. Display the result of the function in the browser's JavaScript console.
const maxNum = max(5, 10);
console.log(maxNum);
