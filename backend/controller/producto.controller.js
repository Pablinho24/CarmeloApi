const productoModel = require('../models/productos.models');


exports.verProducto  = async (req, res) => {
    try {
        const productos = await productoModel.find({});
        return productos
    } catch (error) {
        res.status(500).json({ message: 'Producto no encontrado'});
    }
};

exports.agregarProducto = async (req, res) => {
    const producto = {
        referencia: req.body.referencia,
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        category: {name: req.body.category},
        images: req.body.images,
    }
    
    const nuevoProducto = await productoModel.create(producto);
    if (nuevoProducto){
        res.redirect('/v1/productosAdmin')
    }
        console.log(nuevoProducto)
    };


    exports.eliminarProducto = async (req, res) => {
        try {
            const producto = await productoModel.findByIdAndDelete(req.params.id);
            
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
        const producto = await productoModel.findByIdAndUpdate(
            req.params.id, 
            req.body, 
        );

        if (producto) {
            res.status(200).json({ message: 'Producto actualizado correctamente', producto });
        } else {
            res.status(404).json({ message: 'Producto no encontrado' });
        }
    } catch (error) {
        console.error('Error al actualizar producto:', error);
        res.status(400).json({ message: error.message });
    }
};




