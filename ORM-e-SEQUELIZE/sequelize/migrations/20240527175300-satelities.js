'use strict';


module.exports = {
   up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('satelities', {

      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },

      name: {
        type: Sequelize.STRING,
        allowNull: false,

      },

      serial_number: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },

      planetId: {
        type: Sequelize.INTEGER,
        references: {
          model: "planets",
          key: "id"
        },
        onUpdate: "CASCADE",
        onDelete: "CASCADE",
      },

      createdAt: {
        type: Sequelize.DATE,
      },

      updatedAt: {
        type: Sequelize.DATE,
      },

    });
  },

   down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('satelities');
  },
};
