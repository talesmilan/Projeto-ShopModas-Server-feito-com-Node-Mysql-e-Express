const express = require('express')
const router = express.Router()
const Produto = require('../database/Produtos')


router.get("/produtos", (req, res) => {
    Produto.findAll().then((produtos) => {
        res.statusCode = 200
        res.json(produtos)
    }).catch(e => {
        res.sendStatus(404)
    })
})

router.get("/produto/:id", (req, res) => {
    if(isNaN(req.params.id)) {
        res.sendStatus(400)
    } else {
        var id = parseInt(req.params.id)
        Produto.findOne({
            where: {id: id}
        }).then((produto) => {
            if(produto != undefined) {
                res.statusCode = 200
                res.json(produto)
            } else {
                res.sendStatus(404)
            }
        }).catch(() => {
            res.sendStatus(404)
        })
    }
})

module.exports = router