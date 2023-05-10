


const {produtoModel : produtoModel} = require('../model/Produto')

const produtoController = {
    create:async(req,res)=> {
        try {
            const service = {
                nome: req.body.nome,
                ncm: req.body.ncm,
                lote: req.body.lote,
                validade:req.body.validadereq,
                classificacao: req.body.classificacao,
                descrição: req.body.descrição,
                foto: req.body.foto

            }
            const response = await produtoModel.create(service)
            res.status(201).json({msg:'serviço criado com sucesso'})
            
        } catch (error) {
            console.log('erro: '+ error)
        }
 
    },

    getAll:async(req,res)=>{
        try {
            const services = await produtoModel.find()
            res.json(services)
            
        } catch (error) {
            console.log(error)
            
            
        }
    }

}

module.exports = produtoController