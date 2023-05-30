const express = require('express');
const fornecedorRoutes = express.Router();

let Fornecedor = require('../model/Fornecedor');

 //api to add Fornecedors
 fornecedorRoutes.route('/add').post(function (req, res) {
    let fornecedor = new Fornecedor(req.body);
    fornecedor.save()
        .then(fornecedor => {
            res.status(200).json({'status': 'successo', 'mssg': 'Fornecedor adicionado com sucesso.'})
        })
        .catch(err => {
            res.status(409).send({'status': 'falhou', 'mssg': 'Não foi possível adicinionar ao banco.'})
        })
 });

 // api to get Fornecedors
 fornecedorRoutes.route('/').get(function (req, res) {
    Fornecedor.find(function (err, fornecedor) {
        if (err) {
            res.status(400).send({ 'status': 'falhou', 'mssg': 'Algo deu errado.' });
        }
        else {
            res.status(200).json({ 'status': 'successo', 'fornecedors': fornecedor });
        }
    })
 });

 // api to get Fornecedors
 fornecedorRoutes.route('/fornecedor/:id').get(function (req, res) {
    let id = req.params.id;
    Fornecedor.findById(id, function (err, fornecedor) {
        if (err) {
            res.status(400).send({ 'status': 'failure', 'mssg': 'Algo deu errado.' });
        }
        else {
            res.status(200).json({ 'status': 'success', 'industry': fornecedor });
        }
    });


});

// api to update route
fornecedorRoutes.route('/update/:id').put(function (req, res) {
    Fornecedor.findById(req.params.id, function (err, fornecedor) {
        if (!fornecedor) {
            res.status(400).send({ 'status': 'failure', 'mssg': 'Nao foi possível encontrar os dados.' });
        } else {
            fornecedor.nome = req.body.nome;
            fornecedor.lote = req.body.lote;
            fornecedor.validade = req.body.validade;
            fornecedor.tipo = req.body.tipo;


            fornecedor.save().then(business => {
                res.status(200).json({ 'status': 'success', 'mssg': 'Dados alterados com sucesso.' });
            })
        }
    });
});

// api for delete
fornecedorRoutes.route('/delete/:id').delete(function (req, res) {
    Fornecedor.findByIdAndRemove({ _id: req.params.id }, function (err,) {
        if (err) {
            res.status(400).send({ 'status': 'failure', 'mssg': 'Algo deu errado.' });
        }
        else {
            res.status(200).json({ 'status': 'success', 'mssg': 'Dados apagados com sucesso.' });
        }
    });
});

module.exports = fornecedorRoutes;