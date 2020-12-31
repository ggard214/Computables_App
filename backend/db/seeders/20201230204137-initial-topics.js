"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Topics",
      [
        {
          topic: "Building",
        },
        {
          topic: "Cooling",
        },
        {
          topic: "Overclocking",
        },
        {
          topic: "Modification",
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Topics", null, {});
  },
};
