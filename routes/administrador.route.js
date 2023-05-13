const express = require('express');
const administradorRoutes = express.Router();

let Administrador = require('../model/Administrador');

 //api para adicionar Administrador
 administradorRoutes.route('/add').post(function (req, res) {
    let administrador = new Administrador(req.body);
    administrador.save()
        .then(administrador => {
            res.status(200).json({'status': 'successo', 'mssg': 'administrador adicionado com sucesso'})
        })
        .catch(err => {
            res.status(409).send({'status': 'falhou', 'mssg': 'não foi possível adicinio ao banco'})
        })
 });

 // api para puxar o Administrador
 administradorRoutes.route('/').get(function (req, res) {
    Administrador.find(function (err, administrador) {
        if (err) {
            res.status(400).send({ 'status': 'falhou', 'mssg': 'Something went wrong' });
        }
        else {
            res.status(200).json({ 'status': 'successo', 'administrador': administrador });
        }
    })
 });

 // api para puxar o Administrador
 administradorRoutes.route('/administrador/:id').get(function (req, res) {
    let id = req.params.id;
    Administrador.findById(id, function (err, administrador) {
        if (err) {
            res.status(400).send({ 'status': 'failure', 'mssg': 'Something went wrong' });
        }
        else {
            res.status(200).json({ 'status': 'success', 'industry': administrador });
        }
    });
});

// api to update route
administradorRoutes.route('/update/:id').put(function (req, res) {
    Administrador.findById(req.params.id, function (err, administrador) {
        if (!administrador) {
            res.status(400).send({ 'status': 'failure', 'mssg': 'Unable to find data' });
        } else {
            administrador.nome = req.body.nome;
            administrador.cpf = req.body.cpf;
            administrador.email = req.body.email;

            administrador.save().then(business => {
                res.status(200).json({ 'status': 'success', 'mssg': 'Update complete' });
            })
        }
    });
});

// api for delete
administradorRoutes.route('/delete/:id').delete(function (req, res) {
    Administrador.findByIdAndRemove({ _id: req.params.id }, function (err,) {
        if (err) {
            res.status(400).send({ 'status': 'failure', 'mssg': 'Something went wrong' });
        }
        else {
            res.status(200).json({ 'status': 'success', 'mssg': 'Delete successfully' });
        }
    });
});

module.exports = administradorRoutes;