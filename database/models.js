
const Usuario = require('../serpica/models/usuario')
const Corredera = require('../serpica/models/corredera')
const Batiente = require('../serpica/models/batiente')
const seccional = require('../serpica/models/seccional')
const Mandos = require('../serpica/models/mando')
const Sensores = require('../serpica/models/sensore')
const Cremallera = require('../serpica/models/cremallera')
const Manuales = require('../serpica/models/manual')
const Seccional = require('../serpica/models/seccional')
function addRelationsToModels() {
  try {
Corredera.hasMany(Mandos)
Mandos.belongsTo(Corredera)

Corredera.hasOne(Cremallera)
Cremallera.belongsTo(Corredera)

Corredera.hasMany(Manuales)
Manuales.belongsTo(Corredera)

Batiente.hasMany(Manuales)
Manuales.belongsTo(Batiente)

Seccional.hasMany(Manuales)
Manuales.belongsTo(seccional)

Sensores.hasMany(Manuales)
Manuales.belongsTo(Sensores)

    console.log('Relations added to all models')
  } catch (error) {
    throw error
  }
}

module.exports = addRelationsToModels
