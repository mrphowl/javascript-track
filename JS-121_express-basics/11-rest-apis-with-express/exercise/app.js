const express = require('express');
const app = express();
const { records } = require('./data.json');

const getRecordById = id => records.find( record => record.id == id );

// Send a GET request to /quotes to READ a list of quote.
app.get('/quotes', (req, res) => {
  res.json(records);
});
// Send a GET request to /quotes/:id to READ (view) a quote.
app.get('/quotes/:id', (req, res) => {
  const id = req.params.id;
  const quote = getRecordById(id);
  res.json(quote);
});
// Send a POST request to /quotes to CREATE new a quote.
// Send a PUT request to /quotes/:id to UPDATE (edit) a quote.
// Send a DELETE request to /quotes/:id to DELETE a quote.
// Send a GET request to /quotes/quotes/random to READ (view) a random quote.


app.listen(3000, () => console.log('Quote API listening on port 3000!'));
