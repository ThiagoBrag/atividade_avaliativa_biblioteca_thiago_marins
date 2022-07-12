const express = require('express');
const router = express.Router();

const autores = require("./api/Autores/autores.controller");
const clientes = require("./api/Clientes/clientes.controller");
const editoras = require("./api/Editoras/editoras.controller");
const livros = require("./api/Livros/livros.controller");
const locacoes = require("./api/Locacoes/locacoes.controller");

router.use("/autores",autores);
router.use("/clientes",clientes);
router.use("/editoras",editoras);
router.use("/livros",livros);
router.use("/locacoes",locacoes);


module.exports = router;