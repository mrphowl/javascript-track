const express = require('express');

// Create an Express application
const app = express();

// Set the view engine to pug template engine.
// The app.set() method defines different settings in Express.
app.set('view engine', 'pug');

// The get() methods handles GET requests
// Root route
app.get('/', (req, res) => {
  const data = {
    title: 'I was once a cucumber'
  };
  // the send() method send the string to the client
  res.render('index', data);
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
