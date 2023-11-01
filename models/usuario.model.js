const mongoose = require('mongoose');
//Definir un esquema
const UsuarioEsquema = new mongoose.Schema({
    nombre:String,
    edad: Number,
    correo: String
});

//Crear un modelo
module.exports = mongoose.model('Usuario', UsuarioEsquema);//debemos exponerlo para que sea alcanzado desde cualquier lugar