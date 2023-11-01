const express = require ('express');
const { getAllUsuario,getUsuarioPorId,addUsuario,updateUsuario, deleteUsuarioPorId} = require('../controllers/usuarioController');

const router = express.Router();

router.get('/usuarios',getAllUsuario)
router.get('/usuarios/:id', getUsuarioPorId )
router.delete('/usuarios/:id', deleteUsuarioPorId )
router.post('/usuarios', addUsuario)
router.put('/usuarios/:id', updateUsuario)


module.exports = router;