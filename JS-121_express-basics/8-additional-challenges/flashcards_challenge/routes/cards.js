const express = require('express');
const router = express.Router();
const { Card, User, Cardset, sequelize } = require('../models');
const { Op } = require('sequelize');
const mid = require('../middleware');


router.get( '/', mid.requiresLogin, async (req, res, next) => {
  // SELECT * FROM `Cards` ORDER BY RAND() LIMIT 1
  const conditions = { order: sequelize.literal('rand()') };
  const current = req.query.c;
  const setId = req.session.setId;
  let searchCondition = {};

  if (current) {
    // add the condition so that we do not get the same card
    // add where clause ...WHERE `id` <> $currentId... when the request comes
    // from the Next Card button
    searchCondition.id = { [Op.ne]: current };
  }

  if (setId) {
    searchCondition.setId = setId;
  }

  if (searchCondition) {
    conditions.where = searchCondition;
  }

  const card = await Card.findOne(conditions);

  if (card === null) {
    const err = new Error('An error was encountered.');
    err.status = 500;
    return next(err);
  }

  res.redirect(`/cards/${card.id}`);
});

router.get('/:id', mid.requiresLogin, async (req, res, next) => {
    const { side } = req.query;
    const { id } = req.params;

    if ( !side ) {
        return res.redirect(`/cards/${id}?side=question`);
    }

    const user = await User.findByPk(req.session.userId);
    const card = await Card.findByPk(id);

    if (card === null) {
      const err = new Error('Card not found.');
      err.status = 404;
      return next(err);
    }

    const text = card[side];
    const { hint } = card;

    const templateData = { id, text, side, name: user.name };

    if ( side === 'question' ) {
      templateData.hint = hint;
      templateData.sideToShow = 'answer';
      templateData.sideToShowDisplay = 'Answer';
    } else if ( side === 'answer' ) {
      templateData.sideToShow = 'question';
      templateData.sideToShowDisplay = 'Question';
    }

    res.render('card', templateData);
});

module.exports = router;