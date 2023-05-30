const express = require('express');
const motoristaRoutes = express.Router();

let Motorista = require('../model/Motorista');


// api to add motorista
motoristaRoutes.route('/add').post(function (req, res) {
    let motorista = new Motorista(req.body);
    motorista.save()
    .then(motorista => {
      res.status(200).json({'status': 'success','mssg': 'Adicionado com sucesso.'});
    })
    .catch(err => {
      res.status(409).send({'status': 'failure','mssg': 'Não foi possível salvar os dados.'});
    });
  });

  // api to get motorista
motoristaRoutes.route('/motorista/:id').get(function (req, res) {
    let id = req.params.id;
    Motorista.findById(id, function (err, motorista){
      if(err){
        res.status(400).send({'status': 'failure','mssg': 'Algo deu errado.'});
      }
      else {
        res.status(200).json({'status': 'success','motorista': motorista});
      }
    });
  });

  // api to update route
motoristaRoutes.route('/update/:id').put(function (req, res) {
    Motorista.findById(req.params.id, function(err, motorista) {
    if (!motorista){
      res.status(400).send({'status': 'failure','mssg': 'Não foi possível encontrar os dados.'});
    } else {
        motorista.nome = req.body.nome;
        motorista.email = req.body.email;
        motorista.cpf = req.body.cpf;
        motorista.dataNasc=req.body.dataNasc
    
        motorista.save().then(business => {
          res.status(200).json({'status': 'success','mssg': 'Dados atualizados com sucesso.'});
      })
    }
  });
});

  // api for delete
motoristaRoutes.route('/delete/:id').delete(function (req, res) {
    Motorista.findByIdAndRemove({_id: req.params.id}, function(err,){
      if(err){
        res.status(400).send({'status': 'failure','mssg': 'Algo deu errado.'});
      }
      else {
        res.status(200).json({'status': 'success','mssg': 'Deletado com sucesso.'});
      }
    });
  });


  module.exports = motoristaRoutes;