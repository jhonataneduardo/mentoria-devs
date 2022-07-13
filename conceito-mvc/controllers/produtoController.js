const numeroAleatorio = require("../models/produtosModel") 

const produtosController = (requisicao, resposta) => {
    const buscarNumeroAleatorio = numeroAleatorio()

    resposta.render("produtos", {
        numeroAleatorio: buscarNumeroAleatorio,
        nome: "Jhonatan",
        mentoria: "Curso de Javascript"
    })
}


module.exports = {
    produtosController
}