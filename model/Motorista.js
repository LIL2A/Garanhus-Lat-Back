let mongoose= require('mongoose');
let Schema= mongoose.Schema

let Motorista= new Schema({
    nome:{
        type: String
    },

    cpf:{
        type: String
    },

    dataNasc:{
        type: Date
    },
    
    email:{
        type: String
    },
},{
    collection: 'motorista'
})
module.exports = mongoose.model('Motorista', Motorista);