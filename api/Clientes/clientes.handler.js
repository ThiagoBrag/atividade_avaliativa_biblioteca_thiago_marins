const crud = require("../../CRUD/index");
const { criarLocacao } = require("../Locacoes/locacoes.handler");
const tabela = "clientes";

async function procurarClientes() {
     return await crud.buscar(tabela);
}

async function procurarCliente(id) {
    return await crud.buscarPorId(tabela, id);
}

async function criarCliente(dados) {
    if (dados.cpf && dados.nome && dados.sobrenome) {
        return await crud.salvar(tabela, false, dados);
    } else {
        return await "Erro! Falta algum dado!"
    }
}

async function editarCliente(dados, id){
    if (dados.cpf && dados.nome && dados.sobrenome) {
        return await crud.salvar(tabela, id, dados);
    } else {
        return await "Erro! Falta algum dado!"
    }
}

async function deletarCliente(id){
    return await crud.remover(tabela, id);
}

module.exports = {
    procurarClientes, procurarCliente, criarCliente, editarCliente, deletarCliente
};