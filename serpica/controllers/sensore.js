const Sensore = require('../models/sensore')

async function getAllSensores(req, res) {
	try {
		const sensores = await Sensore.findAll({paranoid: false})
		if (sensores) {
			return res.status(200).json(sensores)
		} else {
			return res.status(404).send('Sensor no encontrado')
		}
	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function getOneSensore(req, res) {
	try {
		const sensore = await Sensore.findByPk(req.params.id)
		if (sensore) {
			return res.status(200).json(sensore)
		} else {
			return res.status(404).send('Sensor not found')
		}
	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function createSensore(req, res) {
	try {
		const sensore = await Sensore.create(req.body)
		return res.status(200).json({ message: 'Sensor created', sensore: sensore })
	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function updateSensore(req, res) {
	try {
		const [sensoreExist, sensore] = await Sensore.update(req.body, {
			returning: true,
			where: {
				id: req.params.id,
			},
		})
        if (sensoreExist !== 0) {
			return res.status(200).json({ message: 'sensor updated', sensore: sensore })
		} else {
			return res.status(404).send('Sensor not found')
		}
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

async function deleteSensore(req, res) {
	try {
		const sensore = await Sensore.destroy({
			where: {
				id: req.params.id,
			},
		})
		if (sensore) {
			return res.status(200).json('Sensor deleted')
		} else {
			return res.status(404).send('Sensor not found')
		}
	} catch (error) {
		return res.status(500).send(error.message)
	}
}


module.exports = {
	getAllSensores,
	getOneSensore,
	createSensore,
	updateSensore,
	deleteSensore,
}
