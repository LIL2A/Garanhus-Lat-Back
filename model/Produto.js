let mogoose = require('mogoose');
let Schema = mogoose.Schema;

let Produto = new Schema({
    nome: {
        type: string
    },
    ncm: {
        type: string
    },
    lote: {
        type: string
    },
    validade: {
        type: dateTime
    },
    classificacao: {
        type: string
    },
    descrição: {
        type: string
    },
    foto: {
        type: string
    }
},{
    collection: 'produtos'
});

module.exports = mongoose.model('Produtos', Produtos);