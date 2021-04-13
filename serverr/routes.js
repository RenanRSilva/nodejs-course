const express = require('express');
const route = express.Router();//Router é responsavel por tratar as rotas
const homeController = require('./src/controllers/homeController'); //IMporta o modulo home controller
const contatoController = require('./src/controllers/contatoController')


//Rotas da home//Tudo dentro da home esta dentro do homeController
route.get('/', (homeController.paginaInicial));//Função pagina inicial passada como referencia
route.post('/', homeController.trataPost);

//Rotas de contado
route.get('/contato', contatoController.paginaInicial)


module.exports = route;//Exporta a rota
//Criar um controler para cada coisa