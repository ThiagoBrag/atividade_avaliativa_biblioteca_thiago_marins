const crud = require("../../CRUD/index");

async function procurarClientes() {
     return await crud.buscar("clientes");
}

async function procurarCliente(id) {
    return await crud.buscarPorId("clientes", id);
}

async function criarCliente(dados) {
   return await crud.salvar("clientes", false, dados);
}

async function editarCliente(dados, id){
    return await crud.salvar("clientes", id, dados);
}

async function deletarCliente(id){
    return await crud.remover("clientes", id);
}


module.exports = {
    procurarClientes, procurarCliente, criarCliente, editarCliente, deletarCliente
};