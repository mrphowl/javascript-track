const express = require('express');
const router = express.Router();
const { User, Cardset } = require('../models');
const mid = require('../middleware');

/* GET home page. */
router.get('/', mid.requiresLogin, async (req, res) => {
  const user = await User.findByPk(req.session.userId);

  if(user === null) {
    res.redirect('/login');
  } else {
    res.render('index', { name: user.name });
  }
});

/* GET login page */
router.get('/login', mid.loggedOut, (req, res) => {
  res.render('login');
});

router.all('/logout', async (req, res, next) => {
  if (req.session) {
    // delete session data
    await req.session.destroy( err => {
      if (err) {
        return next(err);
      }
    });
  }
  res.redirect('/login');
});

router.get('/confirm-registration', mid.loggedOut, (req, res) => {
  res.render('confirm-registration');
});

router.get('/profile', mid.requiresLogin, (req, res) => {
  res.redirect(`/users/${req.session.userId}`);
});

router.get('/sets', mid.requiresLogin, async (req, res, next) => {
  const setSelected = req.session.setId || 0;
  const sets = await Cardset.findAll({ attributes: ['id', 'name']});
  res.render('sets', {setSelected, sets});
});

router.get('/sets/select/:id', mid.requiresLogin, async(req, res, next) => {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    const err = new Error('Invalid set');
    err.status = 400; // bad request
    return next(err);
  }

  const cardset = await Cardset.findByPk(id);

  if (cardset === null) {
    const err = new Error('Invalid set');
    err.status = 404; // not found
    return next(err);
  }

  req.session.setId = cardset.id;
  req.session.setName = cardset.name;
  res.redirect('/');
});

module.exports = router;
