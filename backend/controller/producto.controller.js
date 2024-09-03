const productoModel = require('../models/productos.models');

exports.verProducto  = async (req, res) => {
    try {
        const productos = await productoModel.find({});
        res.render('pages/listarProductos', { productos: productos });
    } catch (error) {
        res.status(500).json({ message: 'Producto no encontrado'});
    }
};

exports.agregarProducto = async (req, res) => {
    try {
        const nuevoProducto = new productoModel(req.body);
        const producto = await nuevoProducto.save();
        res.status(201).json(producto);
    } catch (error) {
        res.status(400).json({ message: 'No se pudo registrar el producto: ' + error.message });
    }
};

exports.eliminarProducto = async (req, res) => {
    try {
        const producto = await productoModel.findOneAndDelete({ title: req.params.title });
        
        if (producto) {
            res.status(200).json({ message: 'Producto eliminado correctamente', producto });
        } else {
            res.status(404).json({ message: 'Producto no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.actualizarProducto = async (req, res) => {
    try {
        const producto = await productoModel.findOneAndUpdate(
            { title: req.params.title },req.body,{ new: true });

        if (producto) {
            res.status(200).json({ message: 'Producto actualizado correctamente', producto });
        } else {
            res.status(404).json({ message: 'Producto no encontrado' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};



