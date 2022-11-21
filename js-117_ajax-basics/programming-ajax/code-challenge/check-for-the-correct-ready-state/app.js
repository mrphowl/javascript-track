/**
 * JS-117: AJAX Basics: Programming AJAX
 * 
 * Code challenge: Check for the correct ready state
 */
const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function() {
  // Task 1: Add a conditional statement inside the onreadystatechange event
  // handler that tests to make sure the server has sent back its complete
  // response.
  // Task 2: Test to make sure the return status from the server is OK
  if( xhr.readyState === 4 && xhr.status === 200 ) {
    // Task 3: select the div with the ID of 'sidebar'.
    const sidebar = document.getElementById('sidebar');
    // Task 4: Use a DOM element's innerHTML property to set the HTML inside
    // the sidebar div to the server's response.
    sidebar.innerHTML = xhr.responseText;
  }
};
xhr.open('GET', 'sidebar.html');
xhr.send();
