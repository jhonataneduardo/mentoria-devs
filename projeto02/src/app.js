const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors')

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cors())


// Configura rotas
const mercadosRouter = require("./routes/mercadosRouter")
app.use("/", mercadosRouter)




// app.get('/mercados', (requisicao, respostaApi) => {

//     client.query("select * from mercados", (deuErrro, respostaDB) => {
//         if (deuErrro) {
//             respostaApi.status(400).send({"mensagem": "Deu alguma erro :("})
//         } else {
//             respostaApi.status(200).send(respostaDB.rows)
//         }
//     });

// });



// app.post('/produtos', (requisicao, respostaApi) => {

//     // pega os dados da requisição
//     const body = requisicao.body;

//     // comando para inserir dados na tabela "produtos"
//     client.query({
//         text: 'INSERT INTO produtos(nome, descricao, preco, mercado_id) VALUES($1, $2, $3, $4)',
//         values: [body.nome, body.descricao, body.preco, body.mercado_id]}, (err, responstaDB) => {
//             if (err) {
//                 console.error("Algo deu errado ao tentar cadastrar um novo produto.")
//                 respostaApi.status(400).send({"mensagem": err.stack});
//             } else {
//                 console.log("A tentativa de cadastrar um novo produto deu certo.")
//                 respostaApi.status(201).send({"mensagem": "Produto cadastrado com sucesso."});
//             }
//         });
    
// });

 

app.listen(port, () => {
    console.log("Servidor rodando!");
});
