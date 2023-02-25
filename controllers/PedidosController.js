const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const Pedido = require('../database/Pedidos')
const Item = require('../database/ItensPedidos')
const segredo = require('../JWTsecret')


router.post("/pedidos", (req, res) => {
    var {carrinho, precoTotal, quantidade} = req.body
    const authToken = req.headers["authorization"]
    if (authToken === undefined) {
        res.status(400)
        res.json({erro: "Token inválido."})
    }
    const bearer = authToken.split(" ")
    var token = bearer[1]
    if (carrinho.length == 0 || quantidade == 0) {
        res.status(400)
        res.json({erro: "Não foi inviado pedidos."})
    }
    jwt.verify(token, segredo, (erro, dados) => {
        if(erro) {
            res.status(401)
            res.json({erro: "Token inválido."})
        } else {
            Pedido.create({
                usuario: dados.usuario,
                quantidade: quantidade,
                precoTotal: precoTotal
            }).then((pedido) => {
                carrinho.forEach(produto => {
                    Item.create({
                        produtoId: produto.id,
                        quantidade: parseInt(produto.quantity),
                        preco: parseInt(produto.quantity) * parseInt(produto.preco),
                        pedidoId: pedido.id
                    }).then(() => {
                        res.status(200)
                        res.json({Success: "Deu certo"})
                    }).catch(() => {
                        res.status(404)
                        res.json({erro: "Erro interno."})
                    })
                })
            }).catch(() => {
                res.status(404)
                res.json({erro: "Erro interno."})
            })
        }                
    })
})


module.exports = router