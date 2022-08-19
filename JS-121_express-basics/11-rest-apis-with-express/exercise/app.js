const express = require('express');
const app = express();

const records = require('./records');

app.use(express.json());

function asyncHandler(cb) {
  return async (req, res, next) => {
    try {
      await cb(req, res, next);
    } catch (error) {
      next(error);
    }
  };
}

// Send a GET request to /quotes to READ a list of quote.
app.get('/quotes', asyncHandler( async (req, res, next) => {
  const quotes = await records.getQuotes();
  res.json(quotes);
}));

// Send a GET request to /quotes/:id to READ (view) a quote.
app.get('/quotes/:id', asyncHandler( async (req, res, next) => {
  const quote = await records.getQuote(req.params.id);
  if( quote ) {
    res.json(quote);
  } else {
    res.status(404).json({ message: 'Not found.' });
  }
}));

// Send a POST request to /quotes to CREATE new a quote.
app.post('/quotes', asyncHandler( async (req, res, next) => {
  const { quote, author } = req.body;
  if( quote && author ) {
    const record = await records.createQuote({ quote, author });
    res.status(201).json(record);
  } else {
    res.status(400).json({ message: 'Quote and author required.'});
  }
}));

// Send a PUT request to /quotes/:id to UPDATE (edit) a quote.
app.put('/quotes/:id', asyncHandler( async (req, res, next) => {
  const { id } = req.params;
  const { quote, author } = req.body;
  const record = await records.getQuote(id);
  if( record ) {
    record.quote = quote;
    record.author = author;
    records.updateQuote(record);
    res.status(204).end();
  } else {
    res.status(404).json({ message: 'Quote not found.' });
  }
}));

// Send a DELETE request to /quotes/:id to DELETE a quote.
app.delete('/quotes/:id', asyncHandler( async (req, res, next) => {
  const record = await records.getQuote(req.params.id);
  if ( record ) {
    await records.deleteQuote(req.body);
    res.status(204).end();
  } else {
    res.status(404).json('Quote not found.');
  }
}));

// Send a GET request to /quotes/quote/random to READ (view) a random quote.
app.get('/quotes/quote/random', asyncHandler( async (req, res, next) => {
  const quote = await records.getRandomQuote();
  res.json(quote);
}));

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
