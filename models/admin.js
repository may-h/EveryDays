module.exports = (sequelize, { DataTypes, UUIDV4 }) => {
  //모델이름은 단수형, 테이블 이름은 복수형
  return sequelize.define(
    "admin",
    {
      admin_no: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
      },
      admin_id: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true,
      },
      email: {
        type: DataTypes.STRING(40),
        allowNull: false,
      },
      company_name: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      company_code: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      timestamps: true,
      paranoid: true,
    }
  );
};
