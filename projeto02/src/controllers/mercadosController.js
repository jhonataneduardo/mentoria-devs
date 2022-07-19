// Importa Models
const { cadastrarMercado } = require("../models/mercadosModel")


const cadastrarMercadoController = async (requisicao, resposta) => {

    // Chamando o Model
    const body = requisicao.body;
    const resultado = await cadastrarMercado(dados=body)

    if (resultado === true) {
        resposta.status(200).send({msg: 'Mercado cadastrado com sucesso!'})
    } else {
        resposta.status(400).send({msg: 'Não foi possível cadastrar o mercado.'})
    }
}

const listaMercadosController = (requisicao, resposta) => {
    resposta.status(200).send({msg: "listaMercadosController OK!!!!"})
}

module.exports = {
    cadastrarMercadoController,
    listaMercadosController
}