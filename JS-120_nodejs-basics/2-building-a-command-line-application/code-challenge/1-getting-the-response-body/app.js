/**
 * JS-120: Node.js Basics - Building a COmmand Line Application
 * 
 * Code challenge: Getting the response body
 */
const https = require('https');
// Replacing this URL https://teamtreehouse.com/chalkers.json with something
// we can use.
const url = 'https://teamtreehouse.com/profiles/codeandtheory.json';

const request = https.get(url, response => {
  let responseBody = "";

  response.on('data', dataChunk => {
    // Task 1: Without renaming any of the variables, modify the data callback
    // to concatenate the stream of data to the responseBody.
    responseBody += dataChunk.toString();
  });

  // Task 2: Fix the listener so that the callback gets executed when the
  // response has fully finished.
  response.on('end', () => {
    console.log(responseBody);
  });

});

request.on("error", error => {
  console.error(error.message);
});
