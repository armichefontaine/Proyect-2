const router = require('express').Router()

const { /*addMando,*/ getAllMandos, getOneMando, createMando, updateMando, deleteMando} = require('../controllers/mando.js')

router.get('/', getAllMandos)
router.get('/:id', getOneMando)
router.post('/', createMando)
// router.post('/:mandoId/corredera/:correderaId',addMando)
router.put('/:id', updateMando)
router.delete('/:id', deleteMando)

module.exports = router