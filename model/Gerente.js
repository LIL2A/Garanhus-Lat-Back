let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let Gerente = new Schema({
    nome: {
        type: String
    },
    email: {
        type: String
    },
    cpf: {
        type: String
    },
    matricula: {
        type: String
    }
},{
    collection: 'gerente'
});

module.exports = mongoose.model('Gerente', Gerente);