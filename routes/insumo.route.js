const express = require('express');
const produtoRoutes = express.Router();

let Produto = require('../model/Produto');

 //api to add/POST Produtos
 produtoRoutes.route('/add').post(function (req, res) {
    let produto = new Produto(req.body);
    produto.save()
        .then(produto => {
            res.status(200).json({'status': 'successo', 'mssg': 'produto adicionado com sucesso'})
        })
        .catch(err => {
            res.status(409).send({'status': 'falhou', 'mssg': 'não foi possível adicinio ao banco'})
        })
 });

 // api to GET Produtos
 produtoRoutes.route('/').get(function (req, res) {
    Produto.find(function (err, produto) {
        if (err) {
            res.status(400).send({ 'status': 'falhou', 'mssg': 'Something went wrong' });
        }
        else {
            res.status(200).json({ 'status': 'successo', 'produtos': produto });
        }
    })
 });

 // api to PATCH Produtos by ID
 produtoRoutes.route('/produto/:id').get(function (req, res) {
    let id = req.params.id;
    Produto.findById(id, function (err, produto) {
        if (err) {
            res.status(400).send({ 'status': 'failure', 'mssg': 'Something went wrong' });
        }
        else {
            res.status(200).json({ 'status': 'success', 'industry': produto });
        }
    });
});

// api to UPDATE route
produtoRoutes.route('/update/:id').put(function (req, res) {
    Produto.findById(req.params.id, function (err, produto) {
        if (!produto) {
            res.status(400).send({ 'status': 'failure', 'mssg': 'Unable to find data' });
        } else {
            produto.name = req.body.name;
            produto.ncm = req.body.ncm;
            produto.lote = req.body.lote;
            produto.validade = req.body.validade;
            produto.classificacao = req.body.classificacao;
            produto.descricao = req.body.descricao;
            produto.foto = req.body.foto;

            produto.save().then(business => {
                res.status(200).json({ 'status': 'success', 'mssg': 'Update complete' });
            })
        }
    });
});

// api for DELETE
produtoRoutes.route('/delete/:id').delete(function (req, res) {
    Produto.findByIdAndRemove({ _id: req.params.id }, function (err,) {
        if (err) {
            res.status(400).send({ 'status': 'failure', 'mssg': 'Something went wrong' });
        }
        else {
            res.status(200).json({ 'status': 'success', 'mssg': 'Delete successfully' });
        }
    });
});

module.exports = produtoRoutes;