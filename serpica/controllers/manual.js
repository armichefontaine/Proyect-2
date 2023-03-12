const Manual = require('../models/manual')
const Corredera = require('../models/corredera')

async function getAllManuals(req, res) {
	try {
		const manuals = await Manual.findAll({paranoid: false})
		if (manuals) {
			return res.status(200).json(manuals)
		} else {
			return res.status(404).send('manual no encontrado')
		}
	} catch (error) {
		res.status(500).send(error.message)
	}
}
async function getOneManual(req, res) {
	try {
		const manual = await Manual.findByPk(req.params.id)
		if (manual) {
			return res.status(200).json(manual)
		} else {
			return res.status(404).send('manual no encontrado')
		}
	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function createManual(req, res) {
	try {
		const manual = await Manual.create(req.body)
		return res.status(200).json({ message: 'Manual created', manual: manual })
	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function updateManual(req, res) {
	try {
		const [manualExist, manual] = await Manual.update(req.body, {
			returning: true,
			where: {
				id: req.params.id,
			},
		})
        if (manualExist !== 0) {
			return res.status(200).json({ message: 'Manual updated', manual: manual })
		} else {
			return res.status(404).send('Manual not found')
		}
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

async function deleteManual(req, res) {
	try {
		const manual = await Manual.destroy({
			where: {
				id: req.params.id,
			},
		})
		if (manual) {
			return res.status(200).json('Manual deleted')
		} else {
			return res.status(404).send('UManual not found')
		}
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

async function addCorredera (req, res){ //sincronizar con correderas//
try {
	const manual = await Manual.findByPk(req.params.manualId)
	const corredera = await Corredera.findByPk(req.params.correderaId)
	await corredera.addManual(manual)
	return res.status(200).json({ message: 'Corredera added to manual' })

}catch (error) {
	return res.status(500).send(error.message)
}}

module.exports = {
	getAllManuals,
	getOneManual,
	createManual,
	updateManual,
	deleteManual,
	addCorredera,
}