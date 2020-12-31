'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "PicVids",
      [
        {
          picvidURL:
            "https://computablesfiles.s3.us-east-2.amazonaws.com/PlexParts-708x708.png",
          projId: 1,
        },
        {
          picvidURL:
            "https://computablesfiles.s3.us-east-2.amazonaws.com/watercooled.jpg",
          projId: 2,
        },
        {
          picvidURL:
            "https://computablesfiles.s3.us-east-2.amazonaws.com/fancooled1.png",
          projId: 3,
        },
        {
          picvidURL:
            "https://computablesfiles.s3.us-east-2.amazonaws.com/modification.jpg",
          projId: 4,
        },
        {
          picvidURL:
            "https://computablesfiles.s3.us-east-2.amazonaws.com/build3.gif",
          projId: 5,
        },
        {
          picvidURL:
            "https://computablesfiles.s3.us-east-2.amazonaws.com/overclocking.jpg",
          projId: 6,
        },
        {
          picvidURL:
            "https://computablesfiles.s3.us-east-2.amazonaws.com/modification2.jpg",
          projId: 7,
        },
        {
          picvidURL:
            "https://computablesfiles.s3.us-east-2.amazonaws.com/overclock2.jpg",
          projId: 8,
        },
        {
          picvidURL:
            "https://computablesfiles.s3.us-east-2.amazonaws.com/server.jpg",
          projId: 9,
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('PicVids', null, {});
  }
};
