/**
 * JS-121: Express Basics - Getting Started With Express
 * 
 * Code challenge: Setting up a basic Express app
 */
const express = require('express');

const app = express();
// Task 1: Change the parameter names for the request and response objects to
// req and res.
app.get('/', (req, res) => {
  // Task 2: Respond with "I Love Treehouse!" as an <h2> tag.
  res.send("<h2>I Love Treehouse!</h2>");
});

app.listen(3000);
