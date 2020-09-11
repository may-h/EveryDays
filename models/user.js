module.exports = (sequelize, { DataTypes }) => {
  return sequelize.define(
    "user",
    {
      user_no: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
      },
      name: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      birth: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      company_code: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
    },
    {
      timestamps: true,
      paranoid: true,
    }
  );
};
