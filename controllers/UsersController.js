const express = require('express')
const router = express.Router()
const User = require('../database/Users')
const bcrypt = require('bcryptjs')

router.post("/cadastro", (req, res) => {
    var {nome, email, senha, usuario, estado, cidade, bairro, numero, rua, promocoes, cpf} = req.body
    if (nome == "" || email == "" || senha == "" || usuario == "" || estado == "" || cidade == "" || bairro == "" || numero == "" || rua == "" || cpf == "") {
        res.sendStatus(400)  
    } else {
        var salt = bcrypt.genSaltSync(10)
        var hash = bcrypt.hashSync(senha, salt)
        User.findOne({where: {email: email}}).then((user) => {
            if(user != undefined) {
                res.sendStatus(404) 
            }
        })
        User.findOne({where: {usuario: usuario}}).then((user) => {
            if(user != undefined) {
                res.sendStatus(404)  
            }
        })
        User.findOne({where: {cpf: cpf}}).then((user) => {
            if(user != undefined) {
                res.sendStatus(404)  
            }
        })
        User.create({
            usuario: usuario,
            email: email,
            nome: nome,
            senha: hash,
            estado: estado,
            cidade: cidade,
            bairro: bairro,
            numero: parseInt(numero),
            promocoes: promocoes,
            rua: rua,
            cpf: cpf
        }).then((user) => {
            res.statusCode = 200
            res.json({usuario: user.usuario}) 
        }).catch(() => {
            res.sendStatus(404) 
        })
    }  
})

router.post("/login", (req, res) => {
    var {usuario, senha, lembrar} = req.body
    if (usuario == "" || senha == "") {
        res.sendStatus(400)
    } else {
        User.findOne({where: {usuario: usuario}}).then((user) => {
            if (user == undefined) {
                res.sendStatus(404) 
            } else {
                var correct = bcrypt.compareSync(senha, user.senha)
                if (correct) {
                    req.session = {
                        usuario: user.usuario,
                        email: user.email
                    }
                    res.json(req.session)
                }
            }
        })
    }
})


module.exports = router