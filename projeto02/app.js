const express = require('express');
const app = express();
const port = 3000;
const client = require('./database/db');

app.use(express.json());
app.use(express.urlencoded({ extended: true}));


// client.query({text: 'INSERT INTO mercados(nome, cnpj, rede, cidade, estado) VALUES($1, $2, $3, $4, $5)', values: ['Bom preço 123', 456456, 'galera', 'Jacupiranga', 'São Paulo']}, (err, resposta) => {
//     if (err) {
//         console.error("Query com ERRO", err.stack);
//     } else {
//         console.log("DEU BOAAAA", resposta.rows);
//     }
// });


app.get('/', (requisicao, resposta) => {
    resposta.send({"test": "ok"});
});

app.post('/mercados', (requisicao, resposta) => {
    const body = requisicao.body;
    console.log(body);
    resposta.send({"test": "Minha endpoint /mercados está funcionando!!"})
});
 

app.listen(port, () => {
    console.log("CONECTADOOOO!!");
});