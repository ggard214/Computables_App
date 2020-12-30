'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("PicVids", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      picvidURL: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      projId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: "Projects" },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn("now"),
      },
    })
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('PicVids')
  }
}