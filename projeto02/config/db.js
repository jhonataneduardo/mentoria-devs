const { Client } = require('pg');

const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'usermentoria',
    password: '123',
    database: 'melhorpreco'
});

client.connect(err => {
    if (err) {
        console.error("Algo deu errado com a conexão com o banco de dados.", err.stack);
    } else {
        console.log("Conexão com o banco de dados realizada com sucesso.");
    }
});

module.exports = client;