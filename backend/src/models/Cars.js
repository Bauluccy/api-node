const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Cars",
    {
      id: {
        type: DataTypes.INTEGER(20),
        primaryKey: true,
        autoIncrement: true,
      },
      modelo: { type: DataTypes.STRING(45) },
      cor: { type: DataTypes.STRING(45) },
      marca: { type: DataTypes.STRING(45) },
      ano: {type: DataTypes.INTEGER(20)},
    },
    {
      timestamps: false,
    }
  );
};
