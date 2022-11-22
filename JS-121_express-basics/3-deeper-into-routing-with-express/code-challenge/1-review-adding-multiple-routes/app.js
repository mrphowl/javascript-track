/**
 * JS-121: Express Basics - Deeper Into Routing With Express
 *
 * Code challenge: Review adding multiple routes
 */
const express = require('express');
const posts = require("./mock/posts.json");

const app = express();

app.get('/', (req, res) => {
  res.send("<h1>I Love Treehouse!</h1>");
});

// Task 1: Add a new route at the "/blog" url. The callback function should take req and res as parameters. Leave the callback's body blank for now.

app.get('/blog', (req, res) => {
  // Task 2: Use the send method on the response object to return the posts object when the /blog route is requested.
  res.send(posts);
});

app.listen(3000, () => {
  console.log("The frontend server is running on port 3000!")
});
