const { log } = require('console');
var express = require('express');
path = require('path');
bodyParser = require('body-parser');
cors = require('cors');
mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:8080', {useNewUrl: true})
    .then(() => {console.log('Banco conectado')},
    err => {console.log('Não foi possível se comunicar com o banco')});

const produtoRoute = require('./routes/produtos.route');

var app = express();
app.use(bodyParser.json());
app.use(cors());

app.use('/produto', produtoRoute);
app.get('/', function (req, res) {
    res.send("Olá Hello Mundo World")
});

app.listen(3000, function(){
    console.log("listening on port 3000")
});
