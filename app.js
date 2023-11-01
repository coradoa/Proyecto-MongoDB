const mongoose = require('mongoose');
const Usuario = require('./models/usuario.model');
const express = require('express');
const usuarioRoutes = require('./routes/usuarioRoute.js')

const app = express();
const PORT= 3000;

mongoose.connect('mongodb://127.0.0.1:27017/miPrimeraBaseDeDatos', {
  useUnifiedTopology: true,
  useNewUrlParser: true  
}).then(() => {
  console.log('La conexión a la base de datos se ha realizado correctamente!!!');
}).catch((err) => {
  console.log("No se pudo conectar a la base de datos!!!");
  console.log(err);
});

app.use(express.json());

app.use('/api', usuarioRoutes);

app.listen(PORT, () =>{
  console.log('Servidor Corriendo en el puerto 3000')
});
//Usuario.deleteMany({nombre:'Mario'})
//.then(data => console.log(data))
//.catch(err => console.log(err));

// MODIFICAR UN USUARIO
// Usuario.updateOne({nombre:'Mario'},{edad: 28})
// .then(data => console.log(data))
// .catch(err => console.log(err));

// Fragmento para ver registros de la base
// Usuario.find({nombre:'Mario'})
// .then(data => console.log(data))
// .catch(err => console.log(err));

// Fragmento para crear un registro
// const nuevoUsuario = new Usuario({
    // nombre:'Mario',
    // edad:22,
    // correo:'mario@gmail.com'
// });

// nuevoUsuario.save();

