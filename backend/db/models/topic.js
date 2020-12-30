'use strict';
module.exports = (sequelize, DataTypes) => {
  const Topic = sequelize.define('Topic', {
    topic: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  }, {});
  Topic.associate = function(models) {
    Topic.belongsToMany(models.Project, { foreignKey: "topId", through: models.TopProjJoin, otherKey: "projId" });
  };
  return Topic;
};