'use strict';

const table = 'Cardsets';
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(table, [
      {id: 1, name: 'Programming', createdAt: new Date(), updatedAt: new Date()},
      {id: 2, name: 'Animals', createdAt: new Date(), updatedAt: new Date()},
      {id: 3, name: 'Nature', createdAt: new Date(), updatedAt: new Date()},
      {id: 4, name: 'Math', createdAt: new Date(), updatedAt: new Date()}
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete(table, null, {});
  }
};
