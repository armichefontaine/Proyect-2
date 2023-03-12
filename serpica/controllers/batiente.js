const Batiente = require('../models/batiente')

async function getAllBatientes(req, res) {
	try {
		const batientes = await Batiente.findAll({paranoid: false})
		if (batientes) {
			return res.status(200).json(batientes)
		} else {
			return res.status(404).send('Batiente no encontrado')
		}
	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function getOneBatiente(req, res) {
	try {
		const batiente = await Batiente.findByPk(req.params.id)
		if (batiente) {
			return res.status(200).json(batiente)
		} else {
			return res.status(404).send('Batiente not found')
		}
	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function createBatiente(req, res) {
	try {
		const batiente = await Batiente.create(req.body)
		return res.status(200).json({ message: 'Batiente created', batiente: batiente })
	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function updateBatiente(req, res) {
	try {
		const [batienteExist, batiente] = await Batiente.update(req.body, {
			returning: true,
			where: {
				id: req.params.id,
			},
		})
        if (batienteExist !== 0) {
			return res.status(200).json({ message: 'Batiente updated', batiente: batiente })
		} else {
			return res.status(404).send('Batiente not found')
		}
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

async function deleteBatiente(req, res) {
	try {
		const batiente = await Batiente.destroy({
			where: {
				id: req.params.id,
			},
		})
		if (batiente) {
			return res.status(200).json('Batiente deleted')
		} else {
			return res.status(404).send('Batiente not found')
		}
	} catch (error) {
		return res.status(500).send(error.message)
	}
}



module.exports = {
	getAllBatientes,
	getOneBatiente,
	createBatiente,
	updateBatiente,
	deleteBatiente,
}
