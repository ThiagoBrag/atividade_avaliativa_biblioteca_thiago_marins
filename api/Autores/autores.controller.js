const express = require('express');
const router = express.Router();

const autoresHandler = require('./autores.handler')

router.get("/", async (req, res) => {
    res.json(await autoresHandler.procurarAutores())
})

router.get("/:id", async(req, res) => {
    const id = req.params.id;
    res.json(await autoresHandler.procurarAutor(id))
})

router.post("/", async (req, res) => {
    const dados = req.body;
    res.json(await autoresHandler.criarAutor(dados));
})

router.put("/:id", async (req, res) => {
    const id = req.params.id;
    const dados = req.body;
    res.json(await autoresHandler.editarAutor(dados, id))
})

router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    res.json(await autoresHandler.deletarAutor(id));
})

module.exports = router