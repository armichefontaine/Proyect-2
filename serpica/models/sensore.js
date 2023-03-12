const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const Sensores = sequelize.define(
  'sensores',
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
    voltaje: {
      type: DataTypes.STRING,
    },
    tamaño: {
      type: DataTypes.STRING,
    },
    precio: {
      type: DataTypes.FLOAT,
    },
  },
  { timestamps: false }
)

module.exports = Sensores
