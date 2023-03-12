const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const Cremallera = sequelize.define(
  'cremallera',
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
    color: {
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

module.exports = Cremallera
