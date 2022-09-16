'use strict';

const table = 'Cards';
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(table, [
      {question: 'What language are Express apps written in?', hint: 'It starts with a "J"', answer: 'JavaScript', setId: 1, createdAt: new Date(), updatedAt: new Date()},
      {question: "What is one way a website can store data in a user's browser?", hint: 'They are delicious with milk', answer: 'Cookies', setId: 1, createdAt: new Date(), updatedAt: new Date()},
      {question: "What is a common way to shorten the response object's name inside middleware?", hint: 'It has the same abbreviation as "resolution"', answer: 'res', setId: 1, createdAt: new Date(), updatedAt: new Date()},
      {question: 'How many different values can booleans have?', hint: 'Think: binary', answer: '2', setId: 1, createdAt: new Date(), updatedAt: new Date()},
      {question: 'Which HTML element can contain JavaScript?', hint: 'It starts with an "s"', answer: '<script>', setId: 1, createdAt: new Date(), updatedAt: new Date()},
      {question: 'Canis lupus familiaris', hint: "Man's best friend.", answer: 'Dog', setId: 2, createdAt: new Date(), updatedAt: new Date()},
      {question: 'Felis catus', hint: 'Curiosity killed it.', answer: 'Cat', setId: 2, createdAt: new Date(), updatedAt: new Date()},
      {question: 'Bos taurus', hint: 'Holy!', answer: 'Cow', setId: 2, createdAt: new Date(), updatedAt: new Date()},
      {question: 'Sus domesticus', hint: 'When they fly...', answer: 'Pig', setId: 2, createdAt: new Date(), updatedAt: new Date()},
      {question: 'Gallus gallus domesticus', hint: 'Cluck-cluck', answer: 'Chicken', setId: 2, createdAt: new Date(), updatedAt: new Date()},
      {question: 'The star at the center of the Solar System', hint: 'It is hot.', answer: 'Sun', setId: 3, createdAt: new Date(), updatedAt: new Date()},
      {question: "Earth's only natural sattelite.", hint: 'It orbits around the Earth.', answer: 'Moon', setId: 3, createdAt: new Date(), updatedAt: new Date()},
      {question: 'A large collection of very tiny droplets of water or ice crystals.', hint: 'It floats in the sky.', answer: 'Cloud', setId: 3, createdAt: new Date(), updatedAt: new Date()},
      {question: 'A large natural stream of water that flows over land.', hint: 'It carries freshwater to people, plants, and animals.', answer: 'River', setId: 3, createdAt: new Date(), updatedAt: new Date()},
      {question: 'A landform that rises high above its surroundings.', hint: 'It is taller than a hill.', answer: 'Mountain', setId: 3, createdAt: new Date(), updatedAt: new Date()},
      {question: 'learning through examples', hint: '', answer: 'Inductive teaching', setId: 4, createdAt: new Date(), updatedAt: new Date()},
      {question: 'learning step by step', hint: '', answer: 'Deductive teaching', setId: 4, createdAt: new Date(), updatedAt: new Date()},
      {question: 'A number that is a positive integer or a non-negative integer.', hint: '', answer: 'Natural numbers', setId: 4, createdAt: new Date(), updatedAt: new Date()},
      {question: 'The sum of the differences between all terms and the average is equal to zero.', hint: '', answer: 'Balanced average', setId: 4, createdAt: new Date(), updatedAt: new Date()},
      {question: 'A natural number greater than 1 that is not a product of two smaller natural numbers.', hint: 'Not composite numbers', answer: 'Prime number', setId: 4, createdAt: new Date(), updatedAt: new Date()},
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete(table, null, {});
  }
};
