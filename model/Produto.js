
const mongoose = require("mongoose")
let Schema = mongoose.Schema;

const produtoSchema = new Schema({
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
    descrição: {
        type: String
    },
    foto: {
        type: String
    }
},{
    collection: 'produtos'
});
const produtoModel = mongoose.model('produto', produtoSchema)
module.exports = { produtoModel, produtoSchema}