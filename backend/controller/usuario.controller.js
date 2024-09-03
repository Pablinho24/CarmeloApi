const userModels = require('../models/user.models')

exports.verUsuario = async (req, res) => { // es una promesa que cuando queramos hacer una funcion el await dice que hay que esperar que este caido o no entonces es una promesa
    const consulta = await userModels.find({});
    if (consulta) {
        res.status(200).json(consulta);
    }
    else {
        res.status(404).json("No hay usuarios");
    }
};

exports.buscarUsuario = async (req, res) => {
    const busqueda = await userModels.findOne({ correo: req.params.correo });
    if (busqueda) {
        res.status(200).json(busqueda);
    }
    else {
        res.status(404).json("No hay usuarios");
    }
};

exports.agregarUsuario = async (req, res) => {
    console.log(req.body)
    const nuevo = {
        correo: req.body.correo,
        pass: req.body.pass,
        rol: req.body.rol,
        habilitado: true,
    };
    let consulta = await userModels.create(nuevo);
    if (consulta) {
        res.status(200).json("Usuario creado");
    }
    else {
        res.status(404).json("No se pudo crear el usuario");
    }
};

exports.actualizarUsuario = async (req, res) => {
    const nombreUser = req.body.nombreuser;
    const usuarioEditado = {
        nombre: nombreUser,
        correo: req.body.correouser,
        pasword: req.body.passworduser,
        rol: req.body.roluser,
        habilitado: true,
    };
    let actualizado = await userModels.findOneAndUpdate({ nombre: nombreUser }, usuarioEditado);
    if (actualizado) {
        res.json(actualizado);
    } else {
        res.status(404).json({ message: "Usuario no encontrado" });
    }
};


exports.eliminarUsuario = async (req, res) => {
    console.log(req.body.correo, req.body.correouser)
    let eliminacion = await userModels.findOneAndDelete({ correo: req.body.correo });
    if (eliminacion) {
        res.json(eliminacion);
    } else {
        res.status(404).json({ message: "Usuario no encontrado" });
    }
};