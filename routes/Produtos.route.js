const express = require('express');
const app = express();
const produtoRoutes = express.Router();

let Produto = require('../model/Produto');

 //api to add Produtos
 userRoutes.route('/add').post(function (req, res) {
    let produto = new Produto(req.body);
    produto.save()
        .then(produto => {
            res.status(200).json({'status': 'successo', 'mssg': 'produto adicionado com sucesso'})
        })
        .catch(err => {
            res.status(409).send({'status': 'falhou', 'mssg': 'não foi possível adicinio ao banco'})
        })
 });