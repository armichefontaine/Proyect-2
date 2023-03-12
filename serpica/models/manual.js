const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')




const Manual = sequelize.define(
  'manual',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true
      },
    modelo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    marca: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tipo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    
  },
  { timestamps: false } //es un segimiento de actualizado de los datos que van apareciendo en dbeaver//
  )
  

  module.exports = Manual