const Usuario = require('../models/usuario')

async function getAllUsuarios(req, res) {
	try {
		const usuarios = await Usuario.findAll({paranoid: false})
		if (usuarios) {
			return res.status(200).json(usuarios)
		} else {
			return res.status(404).send('usuario no encontrado')
		}
	} catch (error) {
		res.status(500).send(error.message)
	}
}
async function getOneUsuario(req, res) {
	try {
		const usuario = await Usuario.findByPk(req.params.id)
		if (usuario) {
			return res.status(200).json(usuario)
		} else {
			return res.status(404).send('usuario no encontrado')
		}
	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function createUsuario(req, res) {
	try {
		const usuario = await Usuario.create(req.body)
		return res.status(200).json({ message: 'usuario created', usuario: usuario })
	} catch (error) {
		res.status(500).send(error.message)
	}
}

async function updateUsuario(req, res) {
	try {
		const [UsuarioExist, usuario] = await Usuario.update(req.body, {
			returning: true,
			where: {
				id: req.params.id,
			},
		})
        if (UsuarioExist !== 0) {
			return res.status(200).json({ message: 'Usuario updated', usuario: usuario })
		} else {
			return res.status(404).send('Usuario not found')
		}
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

async function deleteUsuario(req, res) {
	try {
		const usuario = await Usuario.destroy({
			where: {
				id: req.params.id,
			},
		})
		if (usuario) {
			return res.status(200).json('Usuario deleted')
		} else {
			return res.status(404).send('Usuario not found')
		}
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

module.exports = {
	getAllUsuarios,
	getOneUsuario,
	createUsuario,
	updateUsuario,
	deleteUsuario,
}
