const crud = require("../../CRUD/index");
const tabela = "editoras"

async function procurarEditoras() {
     return await crud.buscar(tabela);
}

async function procurarEditora(id) {
    return await crud.buscarPorId(tabela, id);
}

async function criarEditora(dados) {
    if (dados.nome) {
        return await crud.salvar(tabela, false, dados);
    } else {
        return await "Erro! Falta o nome!"
    }
}

async function editarEditora(dados, id){
    if (dados.nome) {
        return await crud.salvar(tabela, id, dados);
    } else {
        return await "Erro! Falta o nome!"
    }
    
}

async function deletarEditora(id){
    return await crud.remover(tabela, id);
}


module.exports = {
    procurarEditoras, procurarEditora, criarEditora, editarEditora, deletarEditora
};