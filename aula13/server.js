require('dotenv').config()//Arquivos privados do desenvolvedor

const express = require('express');
const app = express();
const mongoose = require('mongoose')//Modelagem da base de dados
mongoose.connect(process.env.CONNECTIONSTRING, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() =>{
  app.emit('pronto')
})
.catch(e => console.log(e));

const session = require('express-session'); //Identificar navegador do cliente
const MongoStore = require('connect-mongo');//Salvar sessões na base de dados
const flash = require('connect-flash');//Flash messages
const routes = require('./routes');//Rotas
const path = require('path');//Caminhos
const helmet = require('helmet')//Recomendação do express
const csrf = require('csurf')//Segurança nos formulários
const {middlewareGlobal, checkCsrfError, csrfMiddleware }= require('./src/middlewares/middleware')//middlewares, funções que são executadas na rota

app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'public')));

const sessionOptions = session({//Configurações de sessão
  secret: 'jubileujubileu',
  store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
  saveUninitialized: false,
  resave: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7,
    httpOnly: true
  }
});
app.use(sessionOptions);
app.use(flash())

app.set('views', path.resolve(__dirname, 'src', 'views'));//Arquivos que renderizamos na tela
app.set('view engine', 'ejs');

app.use(csrf());
// Nossos pŕopios middlewares
app.use(middlewareGlobal);
app.use(checkCsrfError);
app.use(csrfMiddleware);
app.use(routes);

app.on('pronto', () => {
  app.listen(3000, () => {
    console.log('Acessar http://localhost:3000');
    console.log('Servidor executando na porta 3000');
  });
})
