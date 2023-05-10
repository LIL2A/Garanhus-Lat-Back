let mogoose = require('mogoose');
let Schema = mogoose.Schema;

let Gerente = new Schema({
    nome: {
        type: string
    },
    email: {
        type: string
    },
    cpf: {
        type: string
    },
    matricula: {
        type: number
    }
},{
    collection: 'gerente'
});

module.exports = mongoose.model('gerente', Gerente);