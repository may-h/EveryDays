const { sequelize } = require(".");

module.exports = (sequelize, { DataTypes }) => {
  return sequelize.define(
    "memo",
    {
      memo_no: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        primaryKey: true,
        autoIncrement: true,
      },
      member_no: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      contents: {
        type: DataTypes.TEXT,
        defaultValue: "",
      },
    },
    {
      timestamps: true,
      paranoid: true,
    }
  );
};
