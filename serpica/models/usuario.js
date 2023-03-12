const { DataTypes } = require('sequelize')
const { sequelize } = require('../../database')




const Usuario = sequelize.define(
  'usuario',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey:true,
      autoIncrement:true
      },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    surnames: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    telefono: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'usuario',
      validate: {
        customValidator: (value) => {
          const enums = ['usuario', 'admin']
          if (!enums.includes(value)) {
            throw new Error('not a valid option')
          }
        }
      },
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          args: true,
          msg: 'Invalid email format'
        }
      },
    },
  },
  { timestamps: false } //es un segimiento de actualizado de los datos que van apareciendo en dbeaver//
  )
  

  module.exports = Usuario
  