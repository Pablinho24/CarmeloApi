const exp = require("express");
const userModels = require("./backend/models/user.models");
const clienteModel = require('./backend/models/cliente.models');
const productoModel = require('./backend/models/productos.models');
const pedidoModel = require('./backend/models/pedidos.models');
const mongoose = require('mongoose');
const logger = require("morgan");
require('dotenv').config();

const router = require('./backend/router/router');

const app = exp();

app.use(exp.urlencoded({ extended: false }));
app.use(exp.json());
app.use(logger("dev"));



const path = require('path')
app.set("view engine", "ejs");
app.set('views', path.join(__dirname, '/frontend/views'));
app.use(exp.static('./frontend/public'));

app.use('/v1', router);

const emailService = require('./backend/utils/email.service');
app.get('/enviarcorreo', async (req, res) => {
    await emailService.sendEmail(
        "juanpabloarango.iearm@gmail.com",
        "Confirmación de Registro",
        "Bienvenido a la tienda en línea más top de todo el mundo",
    );
});

app.get('/registrocompleto', async (req, res) => {
    const nuevo = {
        correo: "juanpabloarango.iearm@gmail.com",
        pass: "12345",
        rol: "cliente",
        habilitado: true
    }
let usuarioTemporal = await modeloUsuario(nuevo).save();
console.log(usuarioTemporal)
const cliente = {
    nombre : "Juan",
    telefono: "123456789",
    direccion: "Calle 123",
    habilitado: true,
    usuario: usuarioTemporal._id
}
await modeloCliente(cliente).save();
})

app.listen(process.env.PORT)