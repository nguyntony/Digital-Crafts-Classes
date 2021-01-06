'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return await queryInterface.bulkInsert("Friends", [
      {
        name: "peridot",
        address: "111 Beach City",
        email: "peri@mail.com",
        phone: "101-101-0000",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "lapis",
        address: "111 Beach City",
        email: "lapis@mail.com",
        phone: "202-202-0000",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return await queryInterface.bulkDelete("Friends")
  }
};

// after you have set up seed data in the terminal you need to run:
// npx sequelize db:seed:all
