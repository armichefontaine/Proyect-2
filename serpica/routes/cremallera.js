const router = require('express').Router()

const {  getAllCremalleras, getOneCremallera, createCremallera, updateCremallera, deleteCremallera,} = require('../controllers/cremallera.js')

router.get('/', getAllCremalleras)
router.get('/:id', getOneCremallera)
router.post('/', createCremallera)
router.put('/:id', updateCremallera)
router.delete('/:id', deleteCremallera)

module.exports = router