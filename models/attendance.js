module.exports = (sequelize, { DataTypes }) => {
  return sequelize.define(
    "attendance",
    {
      attendance_no: {
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
      checkin_time: {
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
