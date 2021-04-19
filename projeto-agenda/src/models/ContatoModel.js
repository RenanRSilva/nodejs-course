const { asyncIterator } = require('core-js/es6/symbol');
const mongoose = require('mongoose');
const validator = require('validator')

const ContatoSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  sobrenome: {type: String, required: false, default: ''},
  email: {type: String, required: false, default: ''},
  telefone: {type: String, required: false, default: ''},
  criadoEm: {type: Date, default: Date.now},
});

const ContatoModel = mongoose.model('Contato', ContatoSchema);

function Contato(body){
  this.body = body;
  this.errors = [];
  this.contato = null
}

Contato.prototype.register = async function(){
  this.valida();
  if(this.errors.length > 0) return;
  this.contato = await contatoModel.create(this.body)
};

Contato.prototype.valida = function(){
  this.cleanUp();
 
 
  //Validação
  if(this.body.email && !validator.isEmail(this.body.email)) this.errors.push('E-mail inválido')//Caso não seja valido adiciona o erro no array de erros
  if(!this.body.nome) this.errors.push('Nome é um campo obrigatório.');
  if(!this.body.nome && !this.body.telefone) {
    this.errors.push('Pelo menos um contato precisa ser enviado: e-mail ou telefone')  
  }
  //A senha precisa ter entre 3 e 50
  if(this.body.password.length < 3 || this.body.password.length >= 50){
    this.errors.push('A senha precisa ter entre 3 e 50 caracteres')
  }
};



module.exports = Contato;
