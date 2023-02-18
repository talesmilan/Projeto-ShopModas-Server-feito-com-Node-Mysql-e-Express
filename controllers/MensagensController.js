const express = require('express')
const router = express.Router()
const Mensagem = require('../database/Mensagens')

router.post("/mensagens", (req, res) => {
    var {nome, email, motivo, mensagem, promocoes } = req.body
    if (nome == "" || email == "" || motivo == "" || mensagem == "") {
        res.sendStatus(400)
    } else {
        Mensagem.create({
            nome: nome,
            email: email,
            motivo: motivo,
            mensagem: mensagem,
            promocoes: promocoes
        }).then(mensagem => {
            res.statusCode = 200
            res.json(mensagem)
        }).catch(() => {
            res.sendStatus(404)
        })
    }
})

module.exports = router