const express = require('express');
const app = express();
const port = 3000;
const client = require('./database/db');

app.use(express.json());
app.use(express.urlencoded({ extended: true}));



app.get('/', (requisicao, resposta) => {
    resposta.send({"test": "ok"});
});

app.post('/mercados', (requisicao, respostaApi) => {

    // dados que estão vindo da requisção que é feita via API -> ("http://localhost:3000/mercados")
    const body = requisicao.body;

    // comando para inserir dados na tabela "mercados"
    client.query({
        text: 'INSERT INTO mercados(nome, cnpj, rede, cidade, estado) VALUES($1, $2, $3, $4, $5)', 
        values: [body.nome, body.cnpj, body.rede, body.cidade, body.estado]}, (err, respostaDB) => {
        if (err) {
            console.error("Query com ERRO", err.stack);
            // repostas da requisição
            respostaApi.status(400).send({"mensagem": err.stack})
        } else {
            console.log("DEU BOAAAA");
            // repostas da requisição
            respostaApi.status(201).send({"mensagem": "Mercado cadastrado com sucesso!!"})
        }
    });

});
 

app.listen(port, () => {
    console.log("CONECTADOOOO!!");
});