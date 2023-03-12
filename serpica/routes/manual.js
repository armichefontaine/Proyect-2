const router = require('express').Router()

const { addCorredera,getAllManuals, getOneManual, createManual, updateManual, deleteManual} = require('../controllers/manual')

router.get('/', getAllManuals)
router.get('/:id', getOneManual)
router.post('/', createManual)
router.put('/:id', updateManual)
router.post('/:manualId/corredera/:correderaId',addCorredera)
router.delete('/:id', deleteManual)


module.exports = router