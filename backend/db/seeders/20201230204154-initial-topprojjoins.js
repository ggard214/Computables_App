'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert(
        "TopProjJoins",
        [
          {
            topId: 1,
            projId: 1,
          },
          {
            topId: 1,
            projId: 5,
          },
          {
            topId: 1,
            projId: 9,
          },
          {
            topId: 2,
            projId: 2,
          },
          {
            topId: 2,
            projId: 3,
          },
          {
            topId: 3,
            projId: 6,
          },
          {
            topId: 3,
            projId: 8,
          },
          {
            topId: 4,
            projId: 4,
          },
          {
            topId: 4,
            projId: 7,
          },
        ],
        {}
      );
   },

  down: (queryInterface, Sequelize) => {
          return queryInterface.bulkDelete("TopProjJoins", null, {});
  }
};
