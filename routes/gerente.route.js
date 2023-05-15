const express = require('express');
const gerenteRoutes = express.Router();

let Gerente = require('../model/Gerente');

 //api to add Gerentes
 gerenteRoutes.route('/add').post(function (req, res) {
    let gerente = new Gerente(req.body);
    gerente.save()
        .then(gerente => {
            res.status(200).json({'status': 'successo', 'mssg': 'Gerente adicionado com sucesso.'})
        })
        .catch(err => {
            res.status(409).send({'status': 'falhou', 'mssg': 'Não foi possível adicinionar ao banco.'})
        })
 });

 // api to get Gerentes
 gerenteRoutes.route('/').get(function (req, res) {
    Gerente.find(function (err, gerente) {
        if (err) {
            res.status(400).send({ 'status': 'falhou', 'mssg': 'Algo deu errado.' });
        }
        else {
            res.status(200).json({ 'status': 'successo', 'gerentes': gerente });
        }
    })
 });

 // api to get Gerentes
 gerenteRoutes.route('/gerente/:id').get(function (req, res) {
    let id = req.params.id;
    Gerente.findById(id, function (err, gerente) {
        if (err) {
            res.status(400).send({ 'status': 'failure', 'mssg': 'Algo deu errado.' });
        }
        else {
            res.status(200).json({ 'status': 'success', 'industry': gerente });
        }
    });
});

// api to update route
gerenteRoutes.route('/update/:id').put(function (req, res) {
    Gerente.findById(req.params.id, function (err, gerente) {
        if (!gerente) {
            res.status(400).send({ 'status': 'failure', 'mssg': 'Nao foi possível encontrar os dados.' });
        } else {
            gerente.name = req.body.name;
            gerente.email = req.body.email;
            gerente.cpf = req.body.cpf;

            gerente.save().then(business => {
                res.status(200).json({ 'status': 'success', 'mssg': 'Dados alterados com sucesso.' });
            })
        }
    });
});

// api for delete
gerenteRoutes.route('/delete/:id').delete(function (req, res) {
    Gerente.findByIdAndRemove({ _id: req.params.id }, function (err,) {
        if (err) {
            res.status(400).send({ 'status': 'failure', 'mssg': 'Algo deu errado.' });
        }
        else {
            res.status(200).json({ 'status': 'success', 'mssg': 'Dados apagados com sucesso.' });
        }
    });
});

module.exports = gerenteRoutes;