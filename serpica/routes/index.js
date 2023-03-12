const router = require('express').Router()

router.use('/usuario', require('./usuario'))
router.use('/corredera', require('./corredera'))
router.use('/batiente', require('./batiente'))
router.use('/seccional', require('./seccional'))
router.use('/sensores', require('./sensores'))
router.use('/mandos', require('./mando'))
router.use('/cremallera', require('./cremallera'))
router.use('/manual', require('./manual'))

module.exports = router