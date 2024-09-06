const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
    referencia: {
        type: String,
        required: [true, 'La referencia es obligatoria']
    },
    title: {
        type: String,
        required: [true, 'El título es obligatorio']
    },
    description: {
        type: String,
        required: [true, 'La descripción es obligatoria']
    },
    price: {
        type: Number,
        required: [true, 'El precio es obligatorio']
    },
    category: {
        name: {
            type: String,
            required: [true, 'El nombre de la categoría es obligatorio']
        }
    },
    images: [
        {
            type: String,
            required: [true, 'Las imágenes son obligatorias']
        }
    ],
}, {
    versionKey: false
});

const productoModel = mongoose.model('productos', productoSchema);

module.exports = productoModel;
