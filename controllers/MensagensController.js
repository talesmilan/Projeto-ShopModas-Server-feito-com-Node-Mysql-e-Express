const express = require('express')
const router = express.Router()
const Mensagem = require('../database/Mensagens')
const validator = require('validator')

router.post("/mensagens", (req, res) => {
    var {nome, email, motivo, mensagem, promocoes } = req.body
    if (nome === "" || nome === undefined || email === "" || email === undefined || motivo === "" || motivo === undefined || mensagem === "" || mensagem === undefined || promocoes === "" || promocoes === undefined) {
        res.status(400)
        res.json({erro: "Você deve preencher todos os campos."})
    } else {
        const emailIsValid = validator.isEmail(email)
        if(!emailIsValid) {
            res.status(400)
            res.json({erro: "Você deve fornecer um email válido."})
        } else if(nome.length !== 0 && (nome.length < 5 || nome.length > 40)) {
            res.status(400)
            res.json({erro: "O nome deve ter entre 5 a 40 caracteres."})
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
    }
})

module.exports = router