const crud = require("../../CRUD/index");

async function procurarLocacoes() {
     return await crud.buscar("locacoes");
}

async function procurarLocacao(id) {
    return await crud.buscarPorId("locacoes", id);
}

async function criarLocacao(dados) {
   return await crud.salvar("locacoes", false, dados);
}

async function editarLocacao(dados, id){
    return await crud.salvar("locacoes", id, dados);
}

async function deletarLocacao(id){
    return await crud.remover("locacoes", id);
}


module.exports = {
    procurarLocacoes, procurarLocacao, criarLocacao, editarLocacao, deletarLocacao
};