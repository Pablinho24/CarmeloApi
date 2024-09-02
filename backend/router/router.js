//Controlador de Productos
const express = require('express');
const router = express.Router();
const productoController = require('./controller/producto.controller');


router.get('/productos', productoController.verProductos);

module.exports = router;

