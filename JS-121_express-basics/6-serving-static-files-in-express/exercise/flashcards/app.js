const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use('/static', express.static('public'));
app.set('view engine', 'pug');

app.locals.ucfirst = value => value.charAt(0).toUpperCase() + value.slice(1);

// import the routes in routes/index.js
const mainRoutes = require('./routes');
// import the routes in routes/cards.js
const cardRoutes = require('./routes/cards');

// use the routes
app.use(mainRoutes);
// All routes declared in routes/cards.js will begin with /cards
app.use('/cards', cardRoutes);

// Error handling for undefined routes
app.use((req, res, next) => {
  const err = new Error('Not found');
  err.status = 404;
  next(err);
})

// Redering the error page
app.use((err, req, res, next) => {
  res.locals.error = err;
  res.status(err.status);
  res.render('error');
});

app.listen(3000, () => {
    console.log('The application is running on localhost:3000!')
});
