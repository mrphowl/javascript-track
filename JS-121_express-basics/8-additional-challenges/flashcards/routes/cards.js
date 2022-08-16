const express = require('express');
const router = express.Router();
const { data } = require('../data/flashcardData.json');
const { cards } = data;
const cardSets = data.sets;

// Search `cards` by `id`
const getCardById = id => cards.find( card => card.id === id );

// Get cards by set
const getCardSetDetails = id => cardSets.find( set => set.id === id );

function filterSideParam(side) {
  side = side.toLowerCase();
  const valid = ['question', 'answer'];
  return valid.includes(side) ? side : false;
}

router.use('/', (req, res, next) => {
  if( ! req.cookies.username ) {
    return res.redirect('/hello');
  }
  if( ! req.cookies.set ) {
    return res.redirect('/sets');
  }
  next();
});

router.get('/', (req, res) => {
  const currentCardId = parseInt(req.query.cur) || 0;
  // Get the current set
  const set = parseInt(req.cookies.set);
  let setCards;
  // Filter the cards by set or get all the cards
  if ( set ) {
    // Collect the cards in the set but not the current card so as not to get the same card
    setCards = cards.filter( card => card.set === set && card.id !== currentCardId);
  } else {
    setCards = cards.filter( card => card.id !== currentCardId);
  }
  // Count the cards
  const cardCount = setCards.length;
  // Go to the empty set page when there is no card in the set.
  if ( !cardCount ) {
    return res.redirect('/sets/empty');
  }
  // Pick a random card position
  const index = Math.floor(Math.random() * cardCount);
  // Get the card ID
  const id = setCards[index].id;
  // Redirect to the card page
  res.redirect(`/cards/${id}?side=question`);
});

// Error handling for invalid card ID
router.use('/:id', (req, res, next) => {
  const id = parseInt(req.params.id);
  const card = getCardById(id);

  if( ! card ) {
    const err = new Error('Not found');
    err.status = 404;
    return next(err);
  }
  next();
});

router.get('/:id', (req, res) => {
  const name = req.cookies.username;
  const cardSetId = parseInt(req.cookies.set);
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
  const card = getCardById(id, cardSetId);
  const text = card[side];
  const cardSet = getCardSetDetails(cardSetId) || 0;
  const templateData = { id, text, name, cardSetName: cardSet.name ? cardSet.name : 'All' };

  if ( side === 'answer') {
    templateData.side = 'answer';
    templateData.flipSide = 'question';
  } else {
    // include the hint when request is asking for the question side
    templateData.hint = card.hint;
    templateData.side = 'question';
    templateData.flipSide = 'answer';
  }

  res.render('card', templateData);
});

module.exports = router;
