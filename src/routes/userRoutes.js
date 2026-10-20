const { Router } = require('express');
const UserController = require('../controllers/userController');

const router = Router();

router.get('/usuarios', UserController.listar);
router.get('/usuarios/:id', UserController.buscarPorId);
router.post('/usuarios', UserController.criar);
router.put('/usuarios/:id', UserController.atualizar);
router.delete('/usuarios/:id', UserController.deletar);

module.exports = router;