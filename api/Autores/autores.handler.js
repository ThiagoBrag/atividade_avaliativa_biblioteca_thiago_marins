const crud = require("../../CRUD/index");

async function procurarAutores() {
     return await crud.buscar("autores");
}

async function procurarAutor(id) {
    return await crud.buscarPorId("autores", id);
}

async function criarAutor(dados) {
   return await crud.salvar("autores", false, dados);
}

async function editarAutor(dados, id){
    return await crud.salvar("autores", id, dados);
}

async function deletarAutor(id){
    return await crud.remover("autores", id);
}


module.exports = {
    procurarAutores, procurarAutor, criarAutor, editarAutor, deletarAutor
};