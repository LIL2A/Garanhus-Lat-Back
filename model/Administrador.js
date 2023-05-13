let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let Administrador = new Schema({
    nome: {
        type: String
    },
    email: {
        type: String
    },
    cpf: {
        type: String
    },
    
    },{
    collection: 'administrador'
});

module.exports = mongoose.model('Administrador', Administrador);