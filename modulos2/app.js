const cachorro = require('./mod');

const cachorrinho = new cachorro('Jubileu')
cachorrinho.latir()


console.log(__filename); //arquivo atual
console.log(__dirname); //Pasta atual

const path = require('path');
console.log(path.resolve(__dirname, '..')); //Pasta atual
