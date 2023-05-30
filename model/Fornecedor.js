let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let Fornecedor=new Schema ( {
nome:{type:String},
lote: {type:String},
validade: {type:String},
tipo: {type:String}},{collection:'fornecedor'});

module.exports = mongoose.model('Fornecedor', Fornecedor);