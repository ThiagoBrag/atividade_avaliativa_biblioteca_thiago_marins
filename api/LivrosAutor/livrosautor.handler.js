const crud = require("../../CRUD/index");
const tabela = "livrosAutor";

async function procurarLivrosAutor() {
  return await crud.buscar(tabela);
}

async function procurarLivroAutor(id) {
  return await crud.buscarPorId(tabela, id);
}

async function criarLivroAutor(dado) {
  return await crud.salvar(tabela, null, dado);
}

async function editarLivroAutor(dado, id) {
  return await crud.salvar(tabela, id, dado);
}

async function deletarLivroAutor(id) {
  return await crud.remover(tabela, id);
}

module.exports = {
    procurarLivrosAutor, procurarLivroAutor, criarLivroAutor, editarLivroAutor, deletarLivroAutor
};