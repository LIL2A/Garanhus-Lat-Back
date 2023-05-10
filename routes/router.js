

const router = require('express').Router()


// service router


const produtosRouter = require('./ProdutosRoute')
router.use("/", produtosRouter)

module.exports = router