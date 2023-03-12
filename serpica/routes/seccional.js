const router = require('express').Router()

const { getAllSeccionals,getOneSeccional, createSeccional, updateSeccional, deleteSeccional} = require('../controllers/seccional.js')

router.get('/', getAllSeccionals)
router.get('/:id', getOneSeccional)
router.post('/', createSeccional)
router.put('/:id', updateSeccional)
router.delete('/:id', deleteSeccional)

module.exports = router