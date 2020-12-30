'use strict';
module.exports = (sequelize, DataTypes) => {
  const Project = sequelize.define(
    "Project",
    {
      title: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      summary: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      steps: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: { model: "Users" },
      },
    },
    {}
  );
  Project.associate = function(models) {
    Project.belongsTo(models.User, { foreignKey: "userId" });
    Project.hasMany(models.Comment, { foreignKey: "projId" });
    Project.belongsToMany(models.Topic, { foreignKey: "projId", through: models.TopProjJoin, otherKey: "topId" });
    Project.hasMany(models.PicVid, { foreignKey: "projId"});
  };
  return Project;
};