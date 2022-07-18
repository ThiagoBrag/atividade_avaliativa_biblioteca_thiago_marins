const crud = require('./crud');

// async function buscarDados() {
//     const dados = await crud.get("autores");
//     console.log(dados);
// }

// async function buscarDadosPorId() {
//     const dados = await crud.getById("autores", "");
//     console.log(dados);
// }

// async function deletar(){
//     const dados = await crud.remove("autores", "");
//     console.log(dados);
// }

// deletar();
// buscarDados();
// buscarDadosPorId();

async function salvarDado() {
    const dadoSalvo = await crud.salvar("autores", null , {
        nome: "Joao", sobrenome: "Henrique", idade: "17"
    });
    console.log(dadoSalvo.nome);
}
salvarDado();