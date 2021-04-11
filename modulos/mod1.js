const nome = 'Luiz'
const sobrenome = 'Miranda'

const falaNome = () => nome + ' ' + sobrenome;

/*module.exports.nome = nome;
module.exports.sobrenome = sobrenome;
module.exports.falaNome = falaNome;
*/
exports.NOME = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;
this.qualquerCoisa = 'O que eu quiser exportar'

console.log(module.exports);