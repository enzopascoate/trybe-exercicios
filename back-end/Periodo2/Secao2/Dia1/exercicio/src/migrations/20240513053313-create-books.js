'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  // Cria tabela books
  async up (queryInterface, Sequelize) {
      await queryInterface.createTable('Books', {
        id: {
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
          type: Sequelize.INTEGER,
        },
        title: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        author: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        pageQuantity: {
          allowNull: false,
          type: Sequelize.INTEGER,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      });
  },
  // Dropa tabela books
  async down (queryInterface, Sequelize) {
      await queryInterface.dropTable('Books');
  }
};
