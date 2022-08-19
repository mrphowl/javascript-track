const express = require('express');
const app = express();
const routes = require('./routes');

const records = require('./records');

app.use(express.json());
app.use('/api', routes);

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
