const crud = require("../../CRUD/index");

async function procurarLocacoes() {
     return await crud.buscar("locacoes");
}

async function procurarLocacao(id) {
    return await crud.buscarPorId("locacoes", id);
}

async function criarLocacao(dados) {
    const listaLocacoes = await crud.buscar("locacoes");
    if (listaLocacoes.filter((locacoes) => locacoes.idCliente == dados.idCliente) == "") {
        if (listaLocacoes.filter((locacoes) => locacoes.idLivro == dados.idLivro) == "") {
            return await crud.salvar("locacoes", false, dados);
        } else {
            return await "Livro inserido já está locado!";
        }
    } else {
        return await "Esse cliente já tem algum livro alugado!";
    }   
}

async function editarLocacao(dados, id){
    const listaLocacoes = await crud.buscar("locacoes");
    if (listaLocacoes.filter((locacoes) => locacoes.idCliente == dados.idCliente) == "") {
        if (listaLocacoes.filter((locacoes) => locacoes.idLivro == dados.idLivro) == "") {
            return await crud.salvar("locacoes", id, dados);
        } else {
            return await "Livro inserido já está locado!";
        }
    } else {
        return await "Esse cliente já tem algum livro alugado!";
    }
}

async function deletarLocacao(id){
    return await crud.remover("locacoes", id);
}


module.exports = {
    procurarLocacoes, procurarLocacao, criarLocacao, editarLocacao, deletarLocacao
};