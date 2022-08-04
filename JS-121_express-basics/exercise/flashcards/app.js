const express = require('express');

// Create an Express application
const app = express();

// The get() methods handles GET requests
// Root route
app.get('/', (req, res) => {
  // the send() method send the string to the client
  res.send(`<h1>Welcome to Code and Theory!</h1>
  <a href="/hello" title="Hello!">Hello!</a>`);
});

// hello route
app.get('/hello', (req, res) => {
  // the send() method send the string to the client
  res.send(`<h1>Hello, hello!</h1>
  <a href="/" title="Go to the homepage.">Homepage</a>`);
});

// Make the app accessible in localhost at port 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}.`);
});
