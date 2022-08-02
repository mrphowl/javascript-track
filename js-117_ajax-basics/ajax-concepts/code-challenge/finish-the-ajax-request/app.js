/**
 * JS-117: AJAX Basics: AJAX Concepts
 * 
 * Code challenge: Finish the AJAX Request
 */
const request = new XMLHttpRequest();
request.onreadystatechange = function () {
  if (request.readyState === 4) {
    document.getElementById("footer").innerHTML = request.responseText;
  }
};
// Task 1: Add the code to open the AJAX request using the GET method and pointing to the 'footer.html' file.
request.open('GET', 'footer.html');
// Task 2: Add the code to send the AJAX request.
request.send();
