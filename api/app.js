// importando os pacotes para uso no arquivo app.js
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
var path = require('path');
const port = 1000;
const bodyParser = require("body-parser");
var indexRouter = require('./routes/index');
var fornecedorRouter = require('./routes/fornecedores')



// crio um servidor express
const app = express();

//MINHAS ROTAS //
app.use('/', indexRouter);
app.use('/fornecedores', fornecedorRouter)

// aplico configurações para dentro do servidor express, adicionando middlewares (body-parser, morgan, cors)
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// DEFINE A PASTA DE VIEWs, PARA INICIAR
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// o servidor irá rodar na porta
app.listen(port, () => console.log(`Express iniciou na porta ${port}`));
