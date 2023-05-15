const express = require('express');
const administradorRoutes = express.Router();

let Administrador = require('../model/Administrador');

// api to add administrador
administradorRoutes.route('/add').post(function (req, res) {
    let administrador = new Administrador(req.body);
    administrador.save()
    .then(administrador => {
      res.status(200).json({'status': 'success','mssg': 'Adicionado com sucesso.'});
    })
    .catch(err => {
      res.status(409).send({'status': 'failure','mssg': 'Não foi possível salvar os dados.'});
    });
  });

  // api to get administrador
administradorRoutes.route('/administrador/:id').get(function (req, res) {
    let id = req.params.id;
    Administrador.findById(id, function (err, administrador){
      if(err){
        res.status(400).send({'status': 'failure','mssg': 'Algo deu errado.'});
      }
      else {
        res.status(200).json({'status': 'success','administrador': administrador});
      }
    });
  });

  // api to update route
administradorRoutes.route('/update/:id').put(function (req, res) {
    Administrador.findById(req.params.id, function(err, administrador) {
    if (!administrador){
      res.status(400).send({'status': 'failure','mssg': 'Não foi possível encontrar os dados.'});
    } else {
        administrador.nome = req.body.nome;
        administrador.email = req.body.email;
        administrador.cpf = req.body.cpf;

        administrador.save().then(business => {
          res.status(200).json({'status': 'success','mssg': 'Dados atualizados com sucesso.'});
      })
    }
  });
});
