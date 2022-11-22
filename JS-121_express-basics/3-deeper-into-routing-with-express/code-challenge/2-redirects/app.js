const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  // Get the username cookie
  const name = req.cookies.username;
  if ( name ) {
    // show the page if the username cookie is set, otherwise
    res.render('index', { name });
  } else {
    // go to the /hello page
    res.redirect('/hello');
  }
});

app.get('/card', (req, res) => {
  res.render('card', { prompt: "Who is buried in Grant's tomb?" });
});

app.get('/hello', (req, res) => {
  // Get the username cookie
  const name = req.cookies.username;
  if ( name ) {
    // Redirect to the root page if the username cookie is already set
    res.redirect('/');
  } else {
    // Show the form
    res.render('hello');
  }
});

app.post('/hello', (req, res) => {
  res.cookie('username', req.body.username);
  res.redirect('/');
});

// Task 2: Create `/goodbye` route
app.post('/goodbye', (req, res) => {
  // Task 3: Clear cookie in `/goodbye` handler
  res.clearCookie('username');
  // Task 4: Redirect to `/hello`
  res.redirect('/hello');
});

app.listen(3000, () => {
    console.log('The application is running on localhost:3000!')
});