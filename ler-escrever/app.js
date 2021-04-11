const path = require('path');
const caminhoArquivo = path.resolve(__dirname, 'text.json');
const escreve = require('./modulos/escreve');
const ler = require('./modulos/ler')//Retorna uma promise

/*
const pessoas = [
    { nome: 'Joao' },
    { nome: 'Maria' },
    { nome: 'Eduardo' },
    { nome: 'Luisa' },
];

//Converter o objeto para JSON
const json = JSON.stringify(pessoas, '', 2);
escreve(caminhoArquivo, json);
*/

async function leArquivo(caminho) {
    const dados = await ler(caminho);
    return dados;
}

function renderizaDados(dados){
    dados = JSON.parse(dados) //Converto o JSON em objeto JavaScript
    dados.forEach(val => console.log(val.nome))
}
leArquivo(caminhoArquivo);

/*const dadosArquivo = leArquivo(caminhoArquivo);
.then(dados => console.log(dados));*/