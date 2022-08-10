const express = require('express');
const router = express.Router();
const { data } = require('../data/flashcardData.json');
const { cards } = data;

// Search `cards` by `id`
const getCardById = id => cards.find( card => card.id === id );

function filterSideParam(side) {
  side = side.toLowerCase();
  const valid = ['question', 'answer'];
  return valid.includes(side) ? side : false;
}

router.get('/', (req, res) => {
  // get a random card and redirect to that card's route
  const cardCount = cards.length;
  // pick a card
  const id = Math.floor(Math.random() * cardCount + 1);
  // redirect to the card of choice
  res.redirect(`/cards/${id}?side=question`);
});

router.get('/:id', (req, res) => {
  const name = req.cookies.username;
  const id = parseInt(req.params.id);

  // check for the `side` parameter
  let { side } = req.query;

  // change `side` to false when its value is not 'question' nor 'answer'
  if( side ) {
    side = filterSideParam(side);
  }

  // redirect to the same card and pass "question" as `side` parameter
  if( !side ) {
    return res.redirect(`/cards/${id}?side=question`);
  }
  // I added, in `cards`, an 'id' property that starts with 1. 'id' in databases (RDB) are normally unique positive integers and the count starts with 1.
  const card = getCardById(id);
  const text = card[side];
  const templateData = { id, text, name };

  if ( side === 'answer') {
    templateData.side = 'question';
    templateData.sideCopy = 'Question';
  } else {
    // include the hint when request is asking for the question side
    templateData.hint = card.hint;
    templateData.side = 'answer';
    templateData.sideCopy = 'Answer';
  }

  res.render('card', templateData);
});

module.exports = router;
