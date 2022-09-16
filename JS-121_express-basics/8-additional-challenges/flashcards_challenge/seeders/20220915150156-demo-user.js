'use strict';

const table = 'Users';
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(table, [{
      name: 'User',
      username: 'user',
      email: 'user@example.com',
      password: '$2b$10$FkZxjL78iAK1OcOLuX3qq.9YHzPSfH5qye1VEqxeADZiJTyEXOfZ6',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete(table, null, {});
  }
};
