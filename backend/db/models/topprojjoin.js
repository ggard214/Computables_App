'use strict';
module.exports = (sequelize, DataTypes) => {
  const TopProjJoin = sequelize.define('TopProjJoin', {
    topId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: "Topics" },
    },
    projId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      references: { model: "Projects" },
    },
  }, {});
  TopProjJoin.associate = function(models) {
    // associations can be defined here
  };
  return TopProjJoin;
};