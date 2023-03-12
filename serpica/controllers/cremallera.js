const Cremallera = require('../models/cremallera')
const Corredera = require('../models/corredera')

async function getAllCremalleras(req, res) {
	try {
		const cremalleras = await Cremallera.findAll({paranoid: false})
		if (cremalleras) {
			return res.status(200).json(cremalleras)
		} else {
			return res.status(404).send('Cremallera no encontrado')
		}
	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function getOneCremallera(req, res) {
	try {
		const cremallera = await Cremallera.findByPk(req.params.id)
		if (cremallera) {
			return res.status(200).json(cremallera)
		} else {
			return res.status(404).send('Cremallera not found')
		}
	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function createCremallera(req, res) {
	try {                                      //que.body agrega todo del body//
		                                       //modelo: req.... agrega solo el campo modelo//
	const cremallera = await Cremallera.create(req.body/*{modelo: req.body.modelo,}*/)
		return res.status(200).json({ message: 'Cremallera created', cremallera: cremallera })
	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function updateCremallera(req, res) {
	try {
		const [cremalleraExist, cremallera] = await Cremallera.update(req.body, {
			returning: true,
			where: {
				id: req.params.id,
			},
		})
        if (cremalleraExist !== 0) {
			return res.status(200).json({ message: 'Cremallera updated', cremallera: cremallera })
		} else {
			return res.status(404).send('Cremallera not found')
		}
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

async function deleteCremallera(req, res) {
	try {
		const cremallera = await Cremallera.destroy({
			where: {
				id: req.params.id,
			},
		})
		if (cremallera) {
			return res.status(200).json('Cremallera deleted')
		} else {
			return res.status(404).send('Cremallera not found')
		}
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

async function addCremallera (req, res){ //sincronizar con correderas//
	try {
		const cremallera = await Cremallera.findByPk(req.params.cremalleraId)
		const corredera = await Corredera.findByPk(req.params.correderaId)
		await corredera.addCremallera(cremallera)
		return res.status(200).json({ message: 'Corredera added to cremallera' })
	
	}catch (error) {
		return res.status(500).send(error.message)
	}}


module.exports = {
	getAllCremalleras,
	getOneCremallera,
	createCremallera,
	updateCremallera,
	deleteCremallera,
	addCremallera
}
