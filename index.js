const express = require('express');
const router = require("./router");

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Meu home")
})

app.use("/api", router);

app.listen(8080, ()=>{
    console.log('App rodando em http://localhost:8080');
});