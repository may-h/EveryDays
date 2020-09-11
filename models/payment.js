module.exports = (sequelize, { DataTypes }) => {
  return sequelize.define(
    "payment",
    {
      paymt_no: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
      },
      member_no: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      paymt_type: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      receiver: {
        type: DataTypes.STRING(10),
        allowNull: true,
      },
      registered_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      start_at: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      end_at: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      timestamps: true,
      paranoid: true,
    }
  );
};
