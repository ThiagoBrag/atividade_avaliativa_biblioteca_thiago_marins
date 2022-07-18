const crud = require("../../CRUD/index");
const { criarLocacao } = require("../Locacoes/locacoes.handler");

async function procurarClientes() {
     return await crud.buscar("clientes");
}

async function procurarCliente(id) {
    return await crud.buscarPorId("clientes", id);
}

async function criarCliente(dados) {
    if (dados.cpf && dados.nome && dados.sobrenome) {
        return await crud.salvar("clientes", false, dados);
    } else {
        return await "Erro! Falta algum dado!"
    }
}

async function editarCliente(dados, id){
    if (dados.cpf && dados.nome && dados.sobrenome) {
        return await crud.salvar("clientes", id, dados);
    } else {
        return await "Erro! Falta algum dado!"
    }
}

async function deletarCliente(id){
    return await crud.remover("clientes", id);
}

module.exports = {
    procurarClientes, procurarCliente, criarCliente, editarCliente, deletarCliente
};