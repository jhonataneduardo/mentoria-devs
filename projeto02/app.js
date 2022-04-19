const express = require('express');
const { Client } = require('pg');
const app = express();
const port = 3000;

const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'usermentoria',
    password: '123',
    database: 'melhorpreco'
});


client.connect(err => {
    if (err) {
        console.error("ERRRRRRRROU", err.stack);
    } else {
        console.log("CONECTADO COM O BANCO DE DADOS");
    }
});

client.query({text: 'INSERT INTO mercados(nome, cnpj, rede, cidade, estado) VALUES($1, $2, $3, $4, $5)', values: ['Bom preço', 456456, 'galera', 'Jacupiranga', 'São Paulo']}, (err, resposta) => {
    if (err) {
        console.error("Query com ERRO", err.stack);
    } else {
        console.log("DEU BOAAAA", resposta.rows);
    }
});



app.get('/', (requisicao, resposta) => {
    resposta.send("Testeeeeeeee");
});
 

app.listen(port, () => {
    console.log("CONECTADOOOO!!");
});