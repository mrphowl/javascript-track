const express = require('express');

// Create an Express application
const app = express();

// The get() methods handles GET requests
// Root route
app.get('/', (request, response) => {
  // the send() method send the string to the client
  response.send('Welcome to Code and Theory!');
});

// Make the app accessible in localhost at port 3000
app.listen(3000);
