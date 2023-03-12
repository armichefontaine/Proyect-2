const router = require('express').Router()

const { getAllSensores,getOneSensore, createSensore, updateSensore, deleteSensore} = require('../controllers/sensore.js')

router.get('/', getAllSensores)
router.get('/:id', getOneSensore)
router.post('/', createSensore)
router.put('/:id', updateSensore)
router.delete('/:id', deleteSensore)

module.exports = router