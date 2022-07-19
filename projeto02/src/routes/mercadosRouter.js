const express = require("express")
const router = express.Router()

// Importando os Controllers
const { cadastrarMercadoController } = require("../controllers/mercadosController")
const { listaMercadosController } = require("../controllers/mercadosController")

// Cadastrar mercado
router.post("/mercados", cadastrarMercadoController)

// Lista todos os mercados
router.get("/mercados", listaMercadosController)

module.exports = router