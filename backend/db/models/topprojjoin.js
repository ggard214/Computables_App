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
    TopProjJoin.belongsTo(models.Project, {foreignKey: 'projId'})
    TopProjJoin.belongsTo(models.Topic, { foreignKey: "topId" });
  };
  return TopProjJoin;
};