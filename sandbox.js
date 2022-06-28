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
    const savedData = await crud.save("Pessoas","ZBTSdEbmCS6JnSq7Pqxx", {
        nome: "Diego", sobrenome: "Planinsheck", idade: "17"
    });
    console.log(savedData);
}
salvarDado();