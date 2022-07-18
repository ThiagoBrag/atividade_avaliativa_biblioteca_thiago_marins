const crud = require("../../CRUD/index");

async function procurarAutores() {
     return await crud.buscar("autores");
}

async function procurarAutor(id) {
    return await crud.buscarPorId("autores", id);
}

async function criarAutor(dados) {
    if (dados.cpf && dados.nome && dados.sobrenome && dados.email) {
        return await crud.salvar("autores", false, dados);
    } else {
        return await "Erro! Falta algum dado!"
    }
}

async function editarAutor(dados, id){
    if (dados.cpf && dados.nome && dados.sobrenome && dados.email) {
        return await crud.salvar("autores", id, dados);
    } else {
        return await "Erro! Falta algum dado!"
    }
}

async function deletarAutor(id){
    return await crud.remover("autores", id);
}


module.exports = {
    procurarAutores, procurarAutor, criarAutor, editarAutor, deletarAutor
};