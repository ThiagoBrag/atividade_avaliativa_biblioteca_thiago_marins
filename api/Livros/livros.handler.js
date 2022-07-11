const crud = require("../../CRUD/index");

async function procurarLivros() {
     return await crud.buscar("livros");
}

async function procurarLivro(id) {
    return await crud.buscarPorId("livros", id);
}

async function criarLivro(dados) {
   return await crud.salvar("livros", false, dados);
}

async function editarLivro(dados, id){
    return await crud.salvar("livros", id, dados);
}

async function deletarLivro(id){
    return await crud.remover("livros", id);
}


module.exports = {
    procurarLivros, procurarLivro, criarLivro, editarLivro, deletarLivro
};