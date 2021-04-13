const express = require('express'); 
const app = express(); //Config para carregar o express

//Express ajuda a trabalhar nas rotas da aplicação
// CRUD -> CREATE, READ, UPDATE, DELETE
//          POST GET PUT DELETE
// http://meusite.com/ <- GET -> Entregue a página
// http://meusite.com/sobre <- GET -> Entregue a página

app.get('/', (req, res) => { //O cliente faz uma requisição o servidor entrega uma resposta
    res.send(`
    <form action="/" method="POST">
    Nome: <input type="text" name="nome"
    <button>Enviar</button>
    </form>
    `)
});

app.post('/', (req, res) => {
    res.send('Recebi o formulário')
});


app.get('/contato', (req, res) => {
    res.send('Obrigado por entrar em contato com a gente')
});

app.listen(3000, () => {
    console.log('Acessar http://localhost:3000')
    console.log('Servidor executando na porta 3000')
});