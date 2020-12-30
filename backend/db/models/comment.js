'use strict';
module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define(
    "Comment",
    {
      comment: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: { model: "Users" },
      },
      projId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: { model: "Projects" },
      },
    },
    {}
  );
  Comment.associate = function(models) {
    Comment.belongsTo(models.User, { foreignKey: "userId" });
    Comment.belongsTo(models.Project, { foreignKey: "projId" });
  };
  return Comment;
};