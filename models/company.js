module.exports = (sequelize, { DataTypes, UUIDV4 }) => {
  return sequelize.define(
    "company",
    {
      company_code: {
        type: DataTypes.UUID,
        defaultValue: UUIDV4,
        allowNull: false,
        unique: true,
        primaryKey: true,
      },
      company_name: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      logo_file_path: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      user_no: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamps: true,
      paranoid: true,
    }
  );
};
