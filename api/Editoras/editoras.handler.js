const crud = require("../../CRUD/index");

async function procurarEditoras() {
     return await crud.buscar("editoras");
}

async function procurarEditora(id) {
    return await crud.buscarPorId("editoras", id);
}

async function criarEditora(dados) {
   return await crud.salvar("editoras", false, dados);
}

async function editarEditora(dados, id){
    return await crud.salvar("editoras", id, dados);
}

async function deletarEditora(id){
    return await crud.remover("editoras", id);
}


module.exports = {
    procurarEditoras, procurarEditora, criarEditora, editarEditora, deletarEditora
};