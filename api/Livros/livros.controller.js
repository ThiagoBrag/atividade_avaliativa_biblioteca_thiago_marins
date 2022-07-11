const express = require('express');
const router = express.Router();

const livrosHandler = require('./livros.handler')

router.get("/", async (req, res) => {
    res.json(await livrosHandler.procurarLivros())
})

router.get("/:id", async(req, res) => {
    const id = req.params.id;
    res.json(await livrosHandler.procurarLivro(id))
})

router.post("/", async (req, res) => {
    const dados = req.body;
    res.json(await livrosHandler.criarLivro(dados));
})

router.put("/:id", async (req, res) => {
    const id = req.params.id;
    const dados = req.body;
    res.json(await livrosHandler.editarLivro(dados, id))
})

router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    res.json(await livrosHandler.deletarLivro(id));
})

module.exports = router