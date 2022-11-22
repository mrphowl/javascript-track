// Code challenge: Add a final `else` clause
// Add a final else clause to this conditional statement. If both the isAdmin
// and isStudent variables are false, the value of the message variable should
// be "Access denied".
const isAdmin = false;
const isStudent = false;
let message;

if ( isAdmin ) {
  message = 'Welcome admin';
} else if ( isStudent ) {
  message = 'Welcome student';
} else {
  message = 'Access denied';
}
