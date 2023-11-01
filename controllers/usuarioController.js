const Usuario = require ('../models/usuario.model');

exports.getAllUsuario = async (req,res) => {
    const Usuarios = await Usuario.find();//Consulta a BD
    res.status(200).json(Usuarios);//Respuesta del servidor
};

exports.addUsuario = async (req,res) => {
    const nuevoUsuario = await Usuario.create(req.body);
    res.status(201).json(nuevoUsuario);
};

exports.getUsuarioPorId = async(req,res)=> {
    try{
        const idUsuario =req.params.id;
        const usuario = await Usuario.findById(idUsuario);

        if(!usuario){
            return res.status(404).send({mensaje:'Usuario no encontrado'});
        }

        res.send(usuario);
    }catch(error){
        res.status(500).send({mensaje:'ERROR AL OBTENER EL USUARIO'});
    }
};

exports.updateUsuario = async (req,res) => {
    try{
        const idUsuario =req.params.id;
        const usuario = await Usuario.findByIdAndUpdate(idUsuario,req.body,{new: true, runValidators: true});

        if(!usuario){
            return res.status(404).send({mensaje:'Usuario no encontrado'});
        }

        res.status(200).send(usuario);

    }catch(error){
        res.status(500).send({mensaje:'ERROR AL ACTUALIZAR EL REGISTRO'});
    }
};

exports.deleteUsuarioPorId = async (req,res) =>{
    try{
        const idUsuario = req.params.id;
        const usuario = await Usuario.findByIdAndDelete(idUsuario,req.body,{new: true, runValidators: true});

        if(!usuario){
            return res.status(404).send({mensaje:'Usuario no encontrado'});
        }

        res.status(200).send(usuario);
        
    } catch(error){
        res.status(500).send({mensaje:'ERROR AL ELIMINAR EL REGISTRO'});
    }
};