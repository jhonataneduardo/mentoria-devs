const express = require('express');
const app = express();

// Configurações básicas do app
app.set("view engine", "ejs")

// Configuração das rotas
const produtosRouter = require("./routes/produtoRouter")
app.use("/", produtosRouter)

const PORT = 3001;


app.listen(PORT, console.log("Aplicação rodando na porta: " + PORT))