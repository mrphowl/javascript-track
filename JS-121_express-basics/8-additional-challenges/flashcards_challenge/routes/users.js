const express = require('express');
const router = express.Router();
const { User } = require('../models');
const bcrypt = require('bcrypt');
const mid = require('../middleware');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', mid.loggedOut, async (req, res, next) => {
  const {username, password} = req.body;

  if (!username || !password) {
    const err = new Error('Username and password required.');
    err.status = 400; // bad request
    return next(err);
  }

  await User.authenticate(username, password, (error, user) => {
    console.log(`error: ${error}`);
    console.log(`user: ${user}`);
    if (error || !user) {
      const err = new Error('Invalid username or password');
      err.status = 401;
      return next(err);
    } else {
      req.session.userId = user.id;
      req.session.setId = 0; // All cards
      return res.redirect('/');
    }
  });
});

router.get('/register', (req, res) => {
  res.render('register-user');
});

router.post('/register', mid.loggedOut, async (req, res, next) => {
  const {name, username, email, password, confirmpw} = req.body;
  const user = await User.create({name, username, email, password});

  if (user.id) {
    res.status(201).redirect('/confirm-registration');
  } else {
    const err = new Error('Something went wrong.');
    err.status = 500;
    return next(err);
  }
});

router.get('/:id', mid.requiresLogin, async (req, res, next) => {
  const user = await User.findByPk(req.session.userId);

  if (user === null) {
    const err = new Error('User not found.');
    err.status = 404;
    return next(err);
  }

  res.render('profile', {
    username: user.username,
    name: user.name,
    email: user.email
  });
});

module.exports = router;
