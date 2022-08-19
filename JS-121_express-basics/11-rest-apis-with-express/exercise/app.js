const express = require('express');
const app = express();

const records = require('./records');

app.use(express.json());

// Send a GET request to /quotes to READ a list of quote.
app.get('/quotes', async (req, res, next) => {
  try {
    const quotes = await records.getQuotes();
    res.json(quotes);
  } catch (error) {
    next(error);
  }
});
// Send a GET request to /quotes/:id to READ (view) a quote.
app.get('/quotes/:id', async (req, res, next) => {
  try {
	  const quote = await records.getQuote(req.params.id);
    if( quote ) {
	    res.json(quote);
    } else {
      res.status(404).json({ message: 'Not found.' });
    }
  } catch (error) {
    next(error);
  }
});
// Send a POST request to /quotes to CREATE new a quote.
app.post('/quotes', async (req, res, next) => {
  const { quote, author } = req.body;
  try {
    if( quote && author ) {
      const record = await records.createQuote({ quote, author });
      res.status(201).json(record);
    } else {
      res.status(400).json({ message: 'Quote and author required.'});
    }
  } catch (error) {
    next(error);
  }
});
// Send a PUT request to /quotes/:id to UPDATE (edit) a quote.
app.put('/quotes/:id', async (req, res, next) => {
  const { id } = req.params;
  const { quote, author } = req.body;
  try {
	  const record = await records.getQuote(id);
    if( record ) {
      record.quote = quote;
      record.author = author;
      records.updateQuote(record);
	    res.status(204).end();
    } else {
      res.status(404).json({ message: 'Quote not found.' });
    }
  } catch (error) {
    next(error);
  }
});
// Send a DELETE request to /quotes/:id to DELETE a quote.
app.delete('/quotes/:id', async (req, res, next) => {
  try {
	  const record = await records.getQuote(req.params.id);
	  if ( record ) {
	    await records.deleteQuote(req.body);
	    res.status(204).end();
	  } else {
	    res.status(404).json('Quote not found.');
	  }
  } catch (error) {
    next(error);
  }
});
// Send a GET request to /quotes/quote/random to READ (view) a random quote.
app.get('/quotes/quote/random', async (req, res, next) => {
  try {
	  const quote = await records.getRandomQuote();
	  res.json(quote);
  } catch (error) {
    next(error);
  }
});

app.use( (req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

// Error handler
app.use( (err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message
    }
  });
});

app.listen(3000, () => console.log('Quote API listening on port 3000!'));
