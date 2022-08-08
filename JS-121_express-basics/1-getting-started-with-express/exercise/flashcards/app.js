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
    title: 'Flash Cards'
  };
  // the send() method send the string to the client
  res.render('index', data);
});

// hello route
app.get('/card', (req, res) => {
  const data = {
    prompt : "Who is buried in Grant's tomb?",
    hint: "Think about whose tomb it is."
  };
  // the send() method send the string to the client
  res.render('card', data);
});

// Make the app accessible in localhost at port 3000
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}.`);
});
