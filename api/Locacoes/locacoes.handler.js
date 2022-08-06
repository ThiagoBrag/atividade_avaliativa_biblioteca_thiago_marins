const { database } = require("firebase-admin");
const crud = require("../../CRUD/index");
const tabela = "locacoes";

async function procurarLocacoes() {
    return await crud.buscar(tabela);
}

async function procurarLocacao(id) {
    return await crud.buscarPorId(tabela, id);
}

async function criarLocacao(dados) {
    let livroExistente = 0
    const listaLocacoes = await crud.buscar(tabela);
    if (listaLocacoes.filter((locacoes) => locacoes.idCliente == dados.idCliente) == "") {
        if (listaLocacoes != "") {
            for (const livro of listaLocacoes) {
                for (const livroLista of livro.idLivro) {
                    for (const livroInserido of dados.idLivro) {
                        if (livroLista == livroInserido) {
                            livroExistente++
                        }
                    }
                }
            }
            if (livroExistente > 0) {
                return await "Livro inserido já está locado!";
            } else {
                return await crud.salvar(tabela, false, dados);
            }
        } else {
            return await crud.salvar(tabela, false, dados);

        }
    } else {
        return await "Esse cliente já tem algum livro alugado!";
    }
}

async function editarLocacao(dados, id) {
    const listaLocacoes = await crud.buscar(tabela);
    if (listaLocacoes.filter((locacoes) => locacoes.idCliente == dados.idCliente) == "") {
        if (listaLocacoes.filter((locacoes) => locacoes.idLivro == dados.idLivro) == "") {
            return await crud.salvar(tabela, id, dados);
        } else {
            return await "Livro inserido já está locado!";
        }
    } else {
        return await "Esse cliente já tem algum livro alugado!";
    }
}

async function deletarLocacao(id) {
    return await crud.remover(tabela, id);
}


module.exports = {
    procurarLocacoes, procurarLocacao, criarLocacao, editarLocacao, deletarLocacao
};