const express = require('express');

const router = express.Router();

const LivroAutor = require('./livrosautor.handler');

router.get("/", async (req, res) => {
    res.json(await LivroAutor.procurarLivrosAutor())
})

router.get("/:id", async (req, res) => {
    const id = req.params.id;
    res.json(await LivroAutor.procurarLivroAutor(id))
})

router.post("/", async (req, res) => {
    const dado = req.body;
    res.json(await LivroAutor.criarLivroAutor(dado));
})

router.put("/:id", async (req, res) => {
    const id = req.params.id;
    const dado = req.body;
    res.json(await LivroAutor.editarLivroAutor(dado, id))
})

router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    res.json(await LivroAutor.deletarLivroAutor(id));
})

module.exports = router;