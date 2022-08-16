'use strict';

const table = 'Cards';
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(table, [
      {
        question: 'What language are Express apps written in?',
        hint: 'It starts with a "J"',
        answer: 'JavaScript',
        set: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "What is one way a website can store data in a user's browser?",
        hint: 'They are delicious with milk',
        answer: 'Cookies',
        set: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: "What is a common way to shorten the response object's name inside middleware?",
        hint: 'It has the same abbreviation as "resolution"',
        answer: 'res',
        set: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'How many different values can booleans have?',
        hint: 'Think: binary',
        answer: '2',
        set: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'Which HTML element can contain JavaScript?',
        hint: 'It starts with an "s"',
        answer: '<script>',
        set: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'あ',
        hint: '',
        answer: 'A',
        set: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'え',
        hint: '',
        answer: 'E',
        set: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'い',
        hint: '',
        answer: 'I',
        set: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'う',
        hint: '',
        answer: 'U',
        set: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        question: 'お',
        hint: '',
        answer: 'O',
        set: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete(table, null, {});
  }
};
