let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let Produto = new Schema({
    nome: {
        type: String
    },
    ncm: {
        type: String
    },
    lote: {
        type: String
    },
    validade: {
        type: Date
    },
    classificacao: {
        type: String
    },
    descricao: {
        type: String
    },
    foto: {
        type: String
    }
},{
    collection: 'produto'
});

module.exports = mongoose.model('Produtos', Produto);