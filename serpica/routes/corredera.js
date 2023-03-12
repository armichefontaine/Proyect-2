const router = require('express').Router()

const { addMando, addManual, getAllCorrederas, getOneCorredera, createCorredera, updateCorredera, deleteCorredera } = require('../controllers/corredera')
const {addCremallera} =require('../controllers/corredera')
router.get('/', getAllCorrederas)
router.get('/:id', getOneCorredera)
router.post('/', createCorredera)
router.put('/:id', updateCorredera)
router.put('/:id/manual',addManual)
router.put('/:correderaId/cremallera/:cremalleraId',addCremallera)
router.put('/:id/mando',addMando)
router.delete('/:id', deleteCorredera)


module.exports = router
