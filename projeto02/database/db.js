const client = require('./config');

client.connect(err => {
    if (err) {
        console.error("ERRRRRRRROU", err.stack);
    } else {
        console.log("CONECTADO COM O BANCO DE DADOS");
    }
});

module.exports = client;