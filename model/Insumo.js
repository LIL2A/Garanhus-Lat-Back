let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let Insumo = new Schema({
    quantidade: {
        type: String
    },
    turno: {
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
    }
},{
    collection: 'insumo'
});

module.exports = mongoose.model('Insumo', Insumo);