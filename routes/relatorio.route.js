const express = require('express');
const relatorioRoutes = express.Router();

let Relatorio = require('../model/Relatorio');

 //api to add/POST Relatorios
 relatorioRoutes.route('/add').post(function (req, res) {
    let relatorio = new Relatorio(req.body);
    relatorio.save()
        .then(relatorio => {
            res.status(200).json({'status': 'successo', 'mssg': 'Relatorio adicionado com sucesso'})
        })
        .catch(err => {
            res.status(409).send({'status': 'falhou', 'mssg': 'Não foi possível adicionar ao banco'})
        })
 });

 // api to GET Relatorios
 relatorioRoutes.route('/').get(function (req, res) {
    Relatorio.find(function (err, relatorio) {
        if (err) {
            res.status(400).send({ 'status': 'falhou', 'mssg': 'Algo deu errado' });
        }
        else {
            res.status(200).json({ 'status': 'successo', 'relatorios': relatorio });
        }
    })
 });

 // api to PATCH Relatorios by ID
 relatorioRoutes.route('/relatorio/:id').get(function (req, res) {
    let id = req.params.id;
    Relatorio.findById(id, function (err, relatorio) {
        if (err) {
            res.status(400).send({ 'status': 'falhou', 'mssg': 'Algo deu errado' });
        }
        else {
            res.status(200).json({ 'status': 'successo', 'industry': relatorio });
        }
    });
});

// api to UPDATE route
relatorioRoutes.route('/update/:id').put(function (req, res) {
    Relatorio.findById(req.params.id, function (err, relatorio) {
        if (!relatorio) {
            res.status(400).send({ 'status': 'falhou', 'mssg': 'Unable to find data' });
        } else {
            relatorio.remetente = req.body.remetente;
            relatorio.tipo = req.body.tipo;
        
            relatorio.save().then(business => {
                res.status(200).json({ 'status': 'successo', 'mssg': 'Atualização completa' });
            })
        }
    });
});

// api for DELETE
relatorioRoutes.route('/delete/:id').delete(function (req, res) {
    Relatorio.findByIdAndRemove({ _id: req.params.id }, function (err,) {
        if (err) {
            res.status(400).send({ 'status': 'falhou', 'mssg': 'Algo deu errado' });
        }
        else {
            res.status(200).json({ 'status': 'successo', 'mssg': 'Deletado com sucesso' });
        }
    });
});

module.exports = relatorioRoutes;