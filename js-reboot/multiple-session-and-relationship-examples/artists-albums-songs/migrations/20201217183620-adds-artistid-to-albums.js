'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      return queryInterface.addColumn(
          'Albums',    // What table are we modifying?
          'artistId',  // What column are we adding?
          {
              type: Sequelize.INTEGER,
              allowNull: false,
              references: {
                  model: 'Artists', // What table do we point to?
                  key: 'id'
              }
          }
      );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
