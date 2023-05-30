let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let Relatorio = new Schema({
    remetente: {
        type: String
    },
    tipo: {
        type: Date
    }
},{
    collection: 'relatorio'
});

module.exports = mongoose.model('Relatorio', Relatorio);