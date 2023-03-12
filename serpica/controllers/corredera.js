const Corredera= require('../models/corredera')


async function getAllCorrederas(req, res) {
	try {
		const correderas = await Corredera.findAll({paranoid: false})
		if (correderas) {
			return res.status(200).json(Correderas)
		} else {
			return res.status(404).send('No Correderas found')
		}
	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function getOneCorredera(req, res) {
	try {
		const corredera = await Corredera.findByPk(req.params.id,{include: Manual}) //include: Manual es para incluir dentro de corredera, varios manuales...es un ejemplo//
		if (corredera) {
			return res.status(200).json(corredera)
		} else {
			return res.status(404).send('corredera not found')
		}
	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function createCorredera(req, res) {
	try {
		const corredera = await Corredera.create(req.body)
		return res.status(200).json({ message: 'corredera created', corredera: corredera })
	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function updateCorredera(req, res) {
	try {
		const [CorrederaExist, corredera] = await Corredera.update(req.body, {
			returning: true,
			where: {
				id: req.params.id,
			},
		})
        if (CorrederaExist !== 0) {
			return res.status(200).json({ message: 'Corredera updated', corredera: corredera })
		} else {
			return res.status(404).send('Corredera not found')
		}
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

async function deleteCorredera(req, res) {
	try {
		const corredera = await Corredera.destroy({
			where: {
				id: req.params.id,
			},
		})
		if (corredera) {
			return res.status(200).json('Corredera deleted')
		} else {
			return res.status(404).send('Corredera not found')
		}
	} catch (error) {
		return res.status(500).send(error.message)
	}
}



                                               



module.exports = {
	getAllCorrederas,
	getOneCorredera,
	createCorredera,
	updateCorredera,
	deleteCorredera,
	
}
