'use strict';
// MIGRATIONS CRIA TABELAS E AS COLUNAS NO MYSQL
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const candlesTable = queryInterface.createTable('Cotações', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      moeda: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      periodicidade: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      open: {
        allowNull: false,
        type: Sequelize.FLOAT,
      },
      close: {
        allowNull: false,
        type: Sequelize.FLOAT,
      },
      high: {
        allowNull: false,
        type: Sequelize.FLOAT,
      },
      low: {
        allowNull: false,
        type: Sequelize.FLOAT,
      },
      time: {
        allowNull: false,
        type: Sequelize.STRING,
      },
    });
    return candlesTable;
  },

  down: async (queryInterface, _Sequelize) => queryInterface.dropTable('Cotações'),
};
