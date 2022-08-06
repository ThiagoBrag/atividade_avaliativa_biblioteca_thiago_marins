const crud = require("../../CRUD/index");
const tabela = "autores"

async function procurarAutores() {
     return await crud.buscar(tabela);
}

async function procurarAutor(id) {
    return await crud.buscarPorId(tabela, id);
}

async function criarAutor(dados) {
    if (dados.cpf && dados.nome && dados.sobrenome && dados.email) {
        return await crud.salvar(tabela, false, dados);
    } else {
        return await "Erro! Falta algum dado!"
    }
}

async function editarAutor(dados, id){
    if (dados.cpf && dados.nome && dados.sobrenome && dados.email) {
        return await crud.salvar(tabela, id, dados);
    } else {
        return await "Erro! Falta algum dado!"
    }
}

async function deletarAutor(id){
    return await crud.remover(tabela, id);
}


module.exports = {
    procurarAutores, procurarAutor, criarAutor, editarAutor, deletarAutor
};