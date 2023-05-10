let mogoose = require('mogoose');
let Schema = mogoose.Schema;

let Administrador = new Schema({
    nome: {
        type: string
    },
    email: {
        type: string
    },
    cpf: {
        type: string
    },
    
    },{
    collection: 'administrador'
});

module.exports = mongoose.model('administrador', Administrador);