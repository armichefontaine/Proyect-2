const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const Batiente = sequelize.define(
  'batiente',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true
      },
    modelo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    marca: {
      type: DataTypes.STRING,
    },
    fuerza: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cierreaut: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    precio: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    peso: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: false }
)

module.exports = Batiente
