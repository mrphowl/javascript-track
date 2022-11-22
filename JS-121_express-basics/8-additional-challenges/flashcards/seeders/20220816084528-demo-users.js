'use strict';

const table = 'Users';
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert(table, [
      { username: 'user1',
        firstname: 'Demo',
        lastname: 'User1',
        password: 'password@123',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'user2',
        firstname: 'Demo',
        lastname: 'User2',
        password: 'password@123',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete(table, null, {});
  }
};
