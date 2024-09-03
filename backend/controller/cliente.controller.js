const clienteModel = require('../models/cliente.models')

exports.verCliente = async (req, res) => {
    try {
        const clientes = await clienteModel.find({});
        res.status(200).json(clientes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.buscarCliente = async (req, res) => {
    try {
        const cliente = await clienteModel.findOne({ correo: req.params.correo });
        if (cliente) {
            res.status(200).json(cliente);
        } else {
            res.status(404).json({ message: 'Cliente no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.crearCliente = async (req, res) => {
    try {
        const nuevoCliente = new clienteModel(req.body);
        const cliente = await nuevoCliente.save();
        res.status(201).json(cliente);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.actualizarCliente = async (req, res) => {
    try {
        const cliente = await clienteModel.findOneAndUpdate(
            { correo: req.params.correo },
            req.body,
            { new: true }  // Devuelve el documento modificado en lugar del original
        );
        if (cliente) {
            res.status(200).json(cliente);
        } else {
            res.status(404).json({ message: 'Cliente no encontrado' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.eliminarCliente = async (req, res) => {
    try {
        const cliente = await clienteModel.findOneAndDelete({ correo: req.params.correo });
        if (cliente) {
            res.status(200).json(cliente);
        } else {
            res.status(404).json({ message: 'Cliente no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
