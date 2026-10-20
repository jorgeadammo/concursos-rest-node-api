const UserModel = require('../models/userModel');

class UserController {
  static listar(req, res) {
    return res.json(UserModel.getAll());
  }

  static buscarPorId(req, res) {
    const { id } = req.params;
    const usuario = UserModel.getById(id);

    if (!usuario) {
      return res.status(404).json({ error: 'Usuário não encontrado.' });
    }

    return res.json(usuario);
  }

  static criar(req, res) {
    const { nome } = req.body;
    if (!nome) {
      return res.status(400).json({ error: 'O campo nome é obrigatório.' });
    }

    const novoUsuario = UserModel.create(nome);
    return res.status(201).json(novoUsuario);
  }

  static atualizar(req, res) {
    const { id } = req.params;
    const { nome } = req.body;

    if (!nome) {
      return res.status(400).json({ error: 'O campo nome é obrigatório.' });
    }

    const usuarioAtualizado = UserModel.update(id, nome);

    if (!usuarioAtualizado) {
      return res.status(404).json({ error: 'Usuário não encontrado.' });
    }

    return res.json(usuarioAtualizado);
  }

  static deletar(req, res) {
    const { id } = req.params;
    const deletado = UserModel.delete(id);

    if (!deletado) {
      return res.status(404).json({ error: 'Usuário não encontrado.' });
    }

    return res.status(204).send(); // 204 No Content (sucesso sem corpo de resposta)
  }
}

module.exports = UserController;