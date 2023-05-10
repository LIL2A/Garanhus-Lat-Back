

const router = require('express').Router()

const produtoController = require('../controller/produtoController')

router.route('/produtos').post((req,res) => produtoController.create(req,res))
router.route('/produtos').get((req, res)=> produtoController.getAll(req,res) )

module.exports = router

