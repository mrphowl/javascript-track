const express = require('express');
const router = express.Router();
const records = require('./records');

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
router.get('/quotes', asyncHandler( async (req, res, next) => {
  const quotes = await records.getQuotes();
  res.json(quotes);
}));

// Send a GET request to /quotes/:id to READ (view) a quote.
router.get('/quotes/:id', asyncHandler( async (req, res, next) => {
  const quote = await records.getQuote(req.params.id);
  if( quote ) {
    res.json(quote);
  } else {
    res.status(404).json({ message: 'Not found.' });
  }
}));

// Send a POST request to /quotes to CREATE new a quote.
router.post('/quotes', asyncHandler( async (req, res, next) => {
  const { quote, author } = req.body;
  if( quote && author ) {
    const record = await records.createQuote({ quote, author });
    res.status(201).json(record);
  } else {
    res.status(400).json({ message: 'Quote and author required.'});
  }
}));

// Send a PUT request to /quotes/:id to UPDATE (edit) a quote.
router.put('/quotes/:id', asyncHandler( async (req, res, next) => {
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
router.delete('/quotes/:id', asyncHandler( async (req, res, next) => {
  const record = await records.getQuote(req.params.id);
  if ( record ) {
    await records.deleteQuote(record);
    res.status(204).end();
  } else {
    res.status(404).json('Quote not found.');
  }
}));

// Send a GET request to /quotes/quote/random to READ (view) a random quote.
router.get('/quotes/quote/random', asyncHandler( async (req, res, next) => {
  const quote = await records.getRandomQuote();
  res.json(quote);
}));

module.exports = router;
