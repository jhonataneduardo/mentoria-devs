const clientDB = require("../../config/db")


const cadastrarMercado = (dados) => {

    clientDB.query({
        text: 'INSERT INTO mercados(nome, cnpj, cidade, estado) VALUES($1, $2, $3, $4)', 
        values: [dados.nome, dados.cnpj, dados.cidade, dados.estado]}, (err, respostaDB) => {
        if (err) {
            console.error("Query com ERRO", err.stack);
            return false
        } else {
            console.log("DEU BOAAAA");
            return true
        }
    });
}

const listaMercados = () => {
    console.log("Teste listaMercados")
}

module.exports = {
    cadastrarMercado,
    listaMercados
}