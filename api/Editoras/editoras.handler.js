const crud = require("../../CRUD/index");

async function procurarEditoras() {
     return await crud.buscar("editoras");
}

async function procurarEditora(id) {
    return await crud.buscarPorId("editoras", id);
}

async function criarEditora(dados) {
    if (dados.nome) {
        return await crud.salvar("editoras", false, dados);
    } else {
        return await "Erro! Falta o nome!"
    }
}

async function editarEditora(dados, id){
    if (dados.nome) {
        return await crud.salvar("editoras", id, dados);
    } else {
        return await "Erro! Falta o nome!"
    }
    
}

async function deletarEditora(id){
    return await crud.remover("editoras", id);
}


module.exports = {
    procurarEditoras, procurarEditora, criarEditora, editarEditora, deletarEditora
};