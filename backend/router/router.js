const clientesController = require('../controller/cliente.controller')
const productoController = require('../controller/producto.controller');
const usuarioController = require('../controller/usuario.controller');
const pedidosController = require('../controller/pedidos.controller');
const express = require('express');
const router = express.Router();

// index
// Mostrar todos los productos 
router.get('/index', async (req, res) => {
    const productos = await productoController.verProducto()
    res.render('pages/index', { productos });
});     



//Controlador de Productos
//Listar productos admin y el CRUD.
router.get('/productosAdmin', async (req, res) => {
    const productos = await productoController.verProducto()
    res.render('pages/listarProductos', { productos });
});

router.post('/productos', productoController.agregarProducto);
router.post('/productos/:id', productoController.actualizarProducto);

router.delete('/productos/:id', productoController.eliminarProducto);

//Controlador de Clientes
router.get('/clientes', clientesController.verCliente);
router.get('/clientes/:correo', clientesController.buscarCliente);
router.post('/clientes', clientesController.crearCliente);
router.put('/clientes/:correo', clientesController.actualizarCliente);
router.delete('/clientes/:correo', clientesController.eliminarCliente);

//Controlador de Usuarios.
router.get('/usuarios', usuarioController.verUsuario);
router.get('/usuarios/:correo', usuarioController.buscarUsuario);
router.post('/usuarios/', usuarioController.agregarUsuario);
router.put('/usuarios/:correo', usuarioController.actualizarUsuario);
router.delete('/usuarios/:correo', usuarioController.eliminarUsuario);

//Controlador de Pedidos.
router.get('/pedidos', pedidosController.verPedido);
router.get('/pedidos/:cliente', pedidosController.buscarPedido);
router.post('/pedidos', pedidosController.agregarPedido);
router.put('/pedidos', pedidosController.actualizarPedido);
router.delete('/pedidos', pedidosController.eliminarPedido);




module.exports = router;

