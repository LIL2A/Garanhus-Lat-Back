const express = require('express');
const insumoRoutes = express.Router();

let Insumo = require('../model/Insumo');

 //api to add/POST Insumos
 insumoRoutes.route('/add').post(function (req, res) {
    let insumo = new Insumo(req.body);
    insumo.save()
        .then(insumo => {
            res.status(200).json({'status': 'successo', 'mssg': 'Insumo adicionado com sucesso'})
        })
        .catch(err => {
            res.status(409).send({'status': 'falhou', 'mssg': 'não foi possível adicinio ao banco'})
        })
 });

 // api to GET Insumos
 insumoRoutes.route('/').get(function (req, res) {
    Insumo.find(function (err, insumo) {
        if (err) {
            res.status(400).send({ 'status': 'falhou', 'mssg': 'Something went wrong' });
        }
        else {
            res.status(200).json({ 'status': 'successo', 'Insumos': insumo });
        }
    })
 });

 // api to PATCH Insumos by ID
 insumoRoutes.route('/Insumo/:id').get(function (req, res) {
    let id = req.params.id;
    Insumo.findById(id, function (err, insumo) {
        if (err) {
            res.status(400).send({ 'status': 'failure', 'mssg': 'Something went wrong' });
        }
        else {
            res.status(200).json({ 'status': 'success', 'industry': insumo });
        }
    });
});

// api to UPDATE route
insumoRoutes.route('/update/:id').put(function (req, res) {
    Insumo.findById(req.params.id, function (err, insumo) {
        if (!insumo) {
            res.status(400).send({ 'status': 'failure', 'mssg': 'Unable to find data' });
        } else {
            insumo.quantidade = req.body.quantidade;
            insumo.turno = req.body.turno;
            insumo.lote = req.body.lote;
            insumo.validade = req.body.validade;
            insumo.classificacao = req.body.classificacao;

            insumo.save().then(business => {
                res.status(200).json({ 'status': 'success', 'mssg': 'Update complete' });
            })
        }
    });
});

// api for DELETE
insumoRoutes.route('/delete/:id').delete(function (req, res) {
    Insumo.findByIdAndRemove({ _id: req.params.id }, function (err,) {
        if (err) {
            res.status(400).send({ 'status': 'failure', 'mssg': 'Something went wrong' });
        }
        else {
            res.status(200).json({ 'status': 'success', 'mssg': 'Delete successfully' });
        }
    });
});

module.exports = insumoRoutes;