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
    await queryInterface.bulkInsert("Pets", [
      {
        name: "pumpkin",
        age: 2,
        species: "steven vegetable",
        FriendId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "pink lion",
        age: 10,
        species: "rose's lion",
        FriendId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "holo pearl",
        age: 1000,
        species: "hologram",
        FriendId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: "kitty",
        age: 1,
        species: "feline",
        FriendId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Pets")
  }
};

// to create a seed file you need to run:
// npx sequelize seed:generate --name name-of-seed

// after you created the seed data you need to run:
// npx sequelize db:seed:all
