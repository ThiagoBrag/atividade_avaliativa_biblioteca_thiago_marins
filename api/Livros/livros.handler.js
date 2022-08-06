const crud = require("../../CRUD/index");
const livrosAutor = require("../LivrosAutor/livrosautor.handler");
const tabela = "livros";

async function procurarLivros() {
    return await crud.buscar(tabela);
}

async function procurarLivro(id) {
    return await crud.buscarPorId(tabela, id);
}

async function criarLivro(dados) {
    if (dados.nome && dados.genero && dados.idEditora && dados.idAutor) {
        const livroSalvo = await crud.salvar(tabela, false, dados);
        console.log("id: "+livroSalvo.id)
        for (const autor of dados.idAutor) {
            const Livro_Autor = {
                idAutor: autor,
                idLivro: livroSalvo.id,
            };
            await livrosAutor.criarLivroAutor(Livro_Autor);
        }
        return livroSalvo
    } else {
        return await "Erro! Falta algum dado!"
    }

}

async function editarLivro(dados, id) {
    if (dados.nome && dados.genero && dados.idEditora && dados.idAutor) {
        return await crud.salvar(tabela, id, dados);
    } else {
        return await "Erro! Falta algum dado!"
    }
}

async function deletarLivro(id) {
    return await crud.remover(tabela, id);
}


module.exports = {
    procurarLivros, procurarLivro, criarLivro, editarLivro, deletarLivro
};