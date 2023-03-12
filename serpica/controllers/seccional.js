const Seccional = require('../models/seccional')

async function getAllSeccionals(req, res) {
	try {
		const seccionals = await Seccional.findAll({paranoid: false})
		if (seccionals) {
			return res.status(200).json(seccionals)
		} else {
			return res.status(404).send('Seccional no encontrado')
		}
	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function getOneSeccional(req, res) {
	try {
		const seccional = await Seccional.findByPk(req.params.id)
		if (seccional) {
			return res.status(200).json(seccional)
		} else {
			return res.status(404).send('Seccional not found')
		}
	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function createSeccional(req, res) {
	try {
		const seccional = await Seccional.create(req.body)
		return res.status(200).json({ message: 'Seccional created', seccional: seccional })
	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function updateSeccional(req, res) {
	try {
		const [seccionalExist, seccional] = await Seccional.update(req.body, {
			returning: true,
			where: {
				id: req.params.id,
			},
		})
        if (seccionalExist !== 0) {
			return res.status(200).json({ message: 'Seccional updated', seccional: seccional })
		} else {
			return res.status(404).send('Seccional not found')
		}
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

async function deleteSeccional(req, res) {
	try {
		const seccional = await Seccional.destroy({
			where: {
				id: req.params.id,
			},
		})
		if (seccional) {
			return res.status(200).json('Seccional deleted')
		} else {
			return res.status(404).send('Seccional not found')
		}
	} catch (error) {
		return res.status(500).send(error.message)
	}
}


module.exports = {
	getAllSeccionals,
	getOneSeccional,
	createSeccional,
	updateSeccional,
	deleteSeccional,
}
