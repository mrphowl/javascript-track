'use strict';

const table = 'Sets';
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(table, [
      {
        name: 'JavaScript',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Hiragana',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete(table, null, {});
  }
};
