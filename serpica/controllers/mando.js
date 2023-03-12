const Mando = require('../models/mando')
const Corredera = require('../models/corredera')

async function getAllMandos(req, res) {
	try {
		const mandos = await Mando.findAll({paranoid: false})
		if (mandos) {
			return res.status(200).json(mandos)
		} else {
			return res.status(404).send('Mando no encontrado')
		}
	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function getOneMando(req, res) {
	try {
		const mando = await Mando.findByPk(req.params.id)
		if (mando) {
			return res.status(200).json(mando)
		} else {
			return res.status(404).send('Mando not found')
		}
	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function createMando(req, res) {
	try {
		const mando = await Mando.create(req.body)
		return res.status(200).json({ message: 'Mando created', mando: mando })
	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function updateMando(req, res) {
	try {
		const [mandoExist, mando] = await Mando.update(req.body, {
			returning: true,
			where: {
				id: req.params.id,
			},
		})
        if (mandoExist !== 0) {
			return res.status(200).json({ message: 'Mando updated', mando: mando })
		} else {
			return res.status(404).send('Mando not found')
		}
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

async function deleteMando(req, res) {
	try {
		const mando = await Mando.destroy({
			where: {
				id: req.params.id,
			},
		})
		if (mando) {
			return res.status(200).json('Mando deleted')
		} else {
			return res.status(404).send('Mando not found')
		}
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

async function addMando (req, res){ //sincronizar con mandos y correderas//
	try {
		console.log("estoy haciendo una prueba")
		const mando = await Mando.findByPk(req.params.mandoId)
		const corredera = await Corredera.findByPk(req.params.correderaId)
		await corredera.addMando(mando)
		return res.status(200).json({ message: 'Corredera added to mando' })
	
	}catch (error) {
		return res.status(500).send(error.message)
	}}

module.exports = {
	getAllMandos,
	getOneMando,
	createMando,
	updateMando,
	deleteMando,
	addMando,
}
