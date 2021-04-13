const express = require('express');
const route = express.Router();//Router é responsavel por tratar as rotas
const homeController = require('./controllers/homeController'); //IMporta o modulo home controller
const contatoController = require('./controllers/contatoController')


//Rotas da home
route.get('/', (homeController.paginaInicial));//Função pagina inicial passada como referencia
route.post('/', homeController.trataPost);

//Rotas de contado
route.get('/contato', contatoController.paginaInicial)


module.exports = route;
//Criar um controler para cada coisa