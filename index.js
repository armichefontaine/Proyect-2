require('dotenv').config()
const { checkConnection, syncModels } = require('./database/index')
const addRelationsToModels = require('./database/models')

const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

async function checkAndSyncPostgreSQL() {
  await checkConnection()
  addRelationsToModels()
  await syncModels('alter') //force lo elimina y actualiza// //alter actualiza pero no borra//
}

function initializeAndListenWithExpress() {
  const app = express()
    app.use(cors())
    app.use(morgan('dev'))
    app.use(express.json())
    app.use('/serpica', require('./serpica/routes'))

    app.listen(process.env.PORT, () => {
      console.log(`> Listening on port: ${process.env.PORT}`)
    })
}

async function startAPI() {
  await checkAndSyncPostgreSQL()
  initializeAndListenWithExpress()
}

startAPI()