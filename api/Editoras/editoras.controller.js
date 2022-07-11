const express = require('express');
const router = express.Router();

const editorasHandler = require('./editoras.handler')

router.get("/", async (req, res) => {
    res.json(await editorasHandler.procurarEditoras())
})

router.get("/:id", async(req, res) => {
    const id = req.params.id;
    res.json(await editorasHandler.procurarEditora(id))
})

router.post("/", async (req, res) => {
    const dados = req.body;
    res.json(await editorasHandler.criarEditora(dados));
})

router.put("/:id", async (req, res) => {
    const id = req.params.id;
    const dados = req.body;
    res.json(await editorasHandler.editarEditora(dados, id))
})

router.delete("/:id", async (req, res) => {
    const id = req.params.id;
    res.json(await editorasHandler.deletarEditora(id));
})

module.exports = router