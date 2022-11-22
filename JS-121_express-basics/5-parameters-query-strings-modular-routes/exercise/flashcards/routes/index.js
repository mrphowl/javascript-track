const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
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

router.get('/hello', (req, res) => {
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

router.post('/hello', (req, res) => {
  res.cookie('username', req.body.username);
  res.redirect('/');
});

// clear the username cookie and go back to /hello
router.post('/goodbye', (req, res) => {
  res.clearCookie('username');
  res.redirect('/hello');
});

module.exports = router;
