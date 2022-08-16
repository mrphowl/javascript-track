const express = require('express');
const router = express.Router();
const { sets } = require('../data/flashcardData.json').data;

// Search `cards` by `id`
const getSetById = id => sets.find( set => set.id === id );

router.use('/', (req, res, next) => {
  if( ! req.cookies.username ) {
    return res.redirect('/hello');
  }
  next();
});

router.get('/', (req, res) => {
  const name = req.cookies.username;
  if( name ) {
    res.render('sets', { sets, name });
  } else {
    res.redirect('/hello');
  }
});

router.get('/empty', (req, res) => {
  const name = req.cookies.username;
  res.render('emptyset', { name });
});

router.post('/select', (req, res) => {
  res.cookie('set', req.body.id);
  res.redirect('/cards');
});

module.exports = router;
