let usuarios = [
  { id: 1, nome: 'Ana' },
  { id: 2, nome: 'Carlos' }
];

class UserModel {
  static getAll() {
    return usuarios;
  }

  static getById(id) {
    return usuarios.find(user => user.id === Number(id));
  }

  static create(nome) {
    const novoUsuario = { id: usuarios.length + 1, nome };
    usuarios.push(novoUsuario);
    return novoUsuario;
  }

  static update(id, nome) {
    const usuario = this.getById(id);
    if (!usuario) return null;

    usuario.nome = nome;
    return usuario;
  }

  static delete(id) {
    const index = usuarios.findIndex(user => user.id === Number(id));
    if (index === -1) return false;

    usuarios.splice(index, 1);
    return true;
  }
}

module.exports = UserModel;