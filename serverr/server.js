const express = require('express'); 
const app = express(); //Config para carregar o express
const routes = require('./routes')

//Express ajuda a trabalhar nas rotas da aplicação
// CRUD -> CREATE, READ, UPDATE, DELETE
//          POST GET PUT DELETE
// http://meusite.com/ <- GET -> Entregue a página
// http://meusite.com/sobre <- GET -> Entregue a página

app.use(
    express.urlencoded(
        {
            extended: true
        }
    )
);
app.use(routes);

/*
app.get('/', (req, res) => { //O cliente faz uma requisição o servidor entrega uma resposta
    //O name do input é como a chave do objeto
    res.send(`
    <form action="/" method="POST">
    Nome do Cliente: <input type="text" name="nome"> 
    <button>Enviar</button>
    </form>
    `);
});

app.post('/', (req, res) => {
    console.log(req.body)
    res.send(`O que você me enviou foi: ${req.body.nome}`)
});

app.get('/testes/:idUsuarios?/>parametro?', (req, res) => {
    //params são as partes que vem na rota da URL /profiles/3
    //query /profiles/?chave1=valor1&chave2=valor2&chave3=valor3
    //body pega os parametros pelo body
    
    console.log(req.params);
    console.log(req.query);
    res.send(req.params.idUsuarios)
})

/*app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato com a gente')
});*/

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000')
});