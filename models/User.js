module.exports = (sequelize, { DataTypes }) => {
  //모델이름은 단수형, 테이블 이름은 복수형
  return sequelize.define(
    "user",
    {
      user_no: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
        autoIncrement: true,
        primaryKey: true,
      },
      user_id: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true,
      },
      email: {
        type: DataTypes.STRING(40),
        allowNull: false,
      },
      password: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      provider: {
        type: DataTypes.STRING(10),
        allowNull: false,
        defaultValue: "local",
      },
    },
    {
      timestamps: true,
      paranoid: true,
    }
  );
};
