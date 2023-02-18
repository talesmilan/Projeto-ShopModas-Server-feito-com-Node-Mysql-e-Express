const express = require('express')
const router = express.Router()
const Produto = require('../database/Produtos')
const {Op} = require('sequelize')

router.get("/produtos", (req, res) => {
    Produto.findAll().then((produtos) => {
        res.statusCode = 200
        res.json(produtos)
    }).catch(e => {
        res.sendStatus(404)
    })
})

router.get("/produtos/:tipo/:page" , (req, res) => {
    var tipo = req.params.tipo
    var page = req.params.page
    var offset = 0
    if (isNaN(page) || page == 1) {
        offset = 0
    } else {
        offset = (parseInt(page) - 1) * 9
    }
    if(tipo == "masculino" || tipo == "feminino") {
        Produto.findAndCountAll({
            where: {genero: tipo},
            limit: 9,
            offset: offset
        }).then(produtos => {
            res.statusCode = 200
            res.json(produtos)
        }).catch(() => {
            res.sendStatus(404)
        })
    } else if(tipo == "tenis" || tipo == "saia" || tipo == "bone" || tipo == "camiseta" || tipo == "bermuda") {
        Produto.findAndCountAll({
            where: {tipo: tipo},
            limit: 9,
            offset: offset
        }).then(produtos => {
            res.statusCode = 200
            res.json(produtos)
        }).catch(() => {
            res.sendStatus(404)
        })
    } else if (tipo == "acessorios" || tipo == "roupas" || tipo == "calcados") {
        if(tipo == "acessorios") {
            Produto.findAndCountAll({
                where: {tipo: ["bone"]},
                limit: 9,
                offset: offset
            }).then(produtos => {
                res.statusCode = 200
                res.json(produtos)  
            }).catch(() => {
                res.sendStatus(404)
            })
        } else if (tipo == "calcados") {
            Produto.findAndCountAll({
                where: {tipo: ["tenis"]},
                limit: 9,
                offset: offset
            }).then(produtos => {
                res.statusCode = 200
                res.json(produtos)                 
            }).catch(() => {
                res.sendStatus(404)
            })
        } else {
            Produto.findAndCountAll({
                where: {tipo: ["camiseta", "bermuda", "saia"]},
                limit: 9,
                offset: offset
            }).then(produtos => {
                res.statusCode = 200
                res.json(produtos) 
            }).catch(() => {
                res.sendStatus(404)
            })
        }
    } else if (tipo == "destaques") {
        Produto.findAndCountAll({
            where: {destaque: true},
            limit: 9,
            offset: offset
        }).then(produtos => {
            res.statusCode = 200
            res.json(produtos)   
        }).catch(() => {
            res.sendStatus(404)
        })
    } else {
        res.sendStatus(404)
    }
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