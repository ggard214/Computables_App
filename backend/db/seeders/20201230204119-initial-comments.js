'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Comments",
      [
        {
          comment:
            "Great post!  I am looking forward to building one myself...",
          userId: 1,
          projId: 1,
        },
        {
          comment: "Cool build!",
          userId: 3,
          projId: 1,
        },
        {
          comment:
            "Thanks so much!",
          userId: 2,
          projId: 1,
        },
        {
          comment:
            "Really cool loop!",
          userId: 1,
          projId: 2,
        },
        {
          comment:
            "Really nice!  I want to go water soon!",
          userId: 2,
          projId: 2,
        },
        {
          comment:
            "Your build sucks",
          userId: 5,
          projId: 2,
        },
        {
          comment:
            "fans suck go water",
          userId: 4,
          projId: 3,
        },
        {
          comment:
            "You cant cool anything with that crap",
          userId: 4,
          projId: 3,
        },
        {
          comment:
            "Sweet write up",
          userId: 2,
          projId: 3,
        },
        {
          comment:
            "Really cool modification",
          userId: 2,
          projId: 4,
        },
        {
          comment:
            "I like it a lot",
          userId: 1,
          projId: 4,
        },
        {
          comment:
            "This is trash",
          userId: 4,
          projId: 4,
        },
        {
          comment:
            "Nice first build",
          userId: 1,
          projId: 5,
        },
        {
          comment:
            "Really cool build",
          userId: 3,
          projId: 5,
        },
        {
          comment:
            "go home building isnt for you",
          userId: 5,
          projId: 5,
        },
        {
          comment:
            "Nice, I have the same processor I am going to try this",
          userId: 3,
          projId: 6,
        },
        {
          comment:
            "I had issues with this, can you help?",
          userId: 1,
          projId: 6,
        },
        {
          comment:
            "I am shocked you didn't brick your PC",
          userId: 4,
          projId: 6,
        },
        {
          comment:
            "Looks cool",
          userId: 2,
          projId: 7,
        },
        {
          comment:
            "this is garbage",
          userId: 5,
          projId: 7,
        },
        {
          comment:
            "Mine didnt work this well. but I got a speed bump!",
          userId: 2,
          projId: 8,
        },
        {
          comment:
            "I can see if I can help!",
          userId: 3,
          projId: 8,
        },
        {
          comment:
            "I am thinking of doing this for home file storage",
          userId: 3,
          projId: 9,
        },
        {
          comment:
            "This is an awesome build",
          userId: 2,
          projId: 9,
        },
        ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('Comments', null, {});
   }
};
