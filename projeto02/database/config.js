const { Client } = require('pg');

const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'usermentoria',
    password: '123',
    database: 'melhorpreco'
});

module.exports = client;