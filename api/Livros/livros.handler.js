const crud = require("../../CRUD/index");

async function procurarLivros() {
     return await crud.buscar("livros");
}

async function procurarLivro(id) {
    return await crud.buscarPorId("livros", id);
}

async function criarLivro(dados) {
    if (dados.nome && dados.genero && dados.idEditora && dados.idAutor) {
        return await crud.salvar("livros", false, dados);
    } else {
        return await "Erro! Falta algum dado!"
    }
}

async function editarLivro(dados, id){
    if (dados.nome && dados.genero && dados.idEditora && dados.idAutor) {
        return await crud.salvar("livros", id, dados);
    } else {
        return await "Erro! Falta algum dado!"
    }
}

async function deletarLivro(id){
    return await crud.remover("livros", id);
}


module.exports = {
    procurarLivros, procurarLivro, criarLivro, editarLivro, deletarLivro
};