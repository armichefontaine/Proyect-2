const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')

const Mandos = sequelize.define(
  'Mandos',
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
      allowNull: false,
    },
    color: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    tamaño: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    precio: {
        type:DataTypes.FLOAT,
    allowNull: false,
    }, 
    botones: {
        type:DataTypes.INTEGER,
    allowNull:false,
},

  },
  { timestamps: false }
)

module.exports = Mandos
