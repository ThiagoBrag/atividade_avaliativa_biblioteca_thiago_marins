const crud = require('./crud');

// async function buscarDados() {
//     const dados = await crud.get("pessoas");
//     console.log(dados);
// }

// async function buscarDadosPorId() {
//     const dados = await crud.getById("pessoas", "BUcRElevLjkT3fk06gZA");
//     console.log(dados);
// }

// async function deletar(){
//     const dados = await crud.remove("pessoas", "BUcRElevLjkT3fk06gZA");
//     console.log(dados);
// }

// deletar();
// buscarDados();
// buscarDadosPorId();

async function salvarDado() {
    const dadoSalvo = await crud.salvar("autores", null , {
        nome: "Diego", sobrenome: "Planinscheck", idade: "17"
    });
    console.log(dadoSalvo);
}
salvarDado();