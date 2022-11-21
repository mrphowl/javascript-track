/*
Code challenge: Use Multiple Conditions

Something's wrong with this script. The value in the variable money is 9.
But if you preview this script, the browser displays the message "Time to go to the theater."
Fix this script so that it correctly tests the money and today variables and 
prints the proper alert message: 

"It's Friday, but I don't have enough money to go out."
*/
const money = 9;
const today = 'Friday'

if ( money >= 50 && today === 'Friday' ) {
  alert("Time for a movie and dinner.");    
} else if ( money > 10 && today === 'Friday' ) {
  alert("Time to go to the theater.");    
} else if ( today === 'Friday' ) {
  alert("It's Friday, but I don't have enough money to go out.");   
} else {
  alert("This isn't Friday. I need to stay home.");
}
