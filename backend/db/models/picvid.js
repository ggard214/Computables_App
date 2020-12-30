"use strict";
module.exports = (sequelize, DataTypes) => {
  const PicVid = sequelize.define(
    "PicVid",
    {
      picvidURL: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      projId: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: { model: "Projects" },
      },
    },
    {}
  );
  PicVid.associate = function (models) {
    PicVid.belongsTo(models.Project, { foreignKey: "projId" });
  };
  return PicVid;
};
