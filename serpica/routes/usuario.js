const router = require('express').Router()

const { getAllUsuarios, getOneUsuario, createUsuario, updateUsuario, deleteUsuario} = require('../controllers/usuario')

router.get('/', getAllUsuarios)
router.get('/:id', getOneUsuario)
router.post('/', createUsuario)
router.put('/:id', updateUsuario)
router.delete('/:id', deleteUsuario)


module.exports = router