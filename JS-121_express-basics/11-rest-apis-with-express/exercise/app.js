const express = require('express');
const app = express();

app.get('/greetings', (req, res) => {
  res.json({greeting: "Hello, Express!"})
});

// Send a GET request to /quotes to READ a list of quote.
// Send a GET request to /quotes/:id to READ (view) a quote.
// Send a POST request to /quotes to CREATE new a quote.
// Send a PUT request to /quotes/:id to UPDATE (edit) a quote.
// Send a DELETE request to /quotes/:id to DELETE a quote.
// Send a GET request to /quotes/quotes/random to READ (view) a random quote.


app.listen(3000, () => console.log('Quote API listening on port 3000!'));
