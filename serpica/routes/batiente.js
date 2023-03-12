const router = require('express').Router()

const { getAllBatientes,getOneBatiente, createBatiente, updateBatiente, deleteBatiente} = require('../controllers/batiente.js')

router.get('/', getAllBatientes)
router.get('/:id', getOneBatiente)
router.post('/', createBatiente)
router.put('/:id', updateBatiente)
router.delete('/:id', deleteBatiente)

module.exports = router