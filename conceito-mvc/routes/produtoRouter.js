const express = require("express")
const router = express.Router()

// Importando os controllers
const { produtosController } = require("../controllers/produtoController")

// Criando as rotas e chamando o produtosControllers
router.get("/produtos", produtosController)

// Exportar o módulo para ser usado em qualquer lugar da aplicação
module.exports = router