const express = require('express')
const router = express.Router()
const User = require('../database/Users')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const segredo = require('../JWTsecret')

router.post("/cadastro", (req, res) => {
    var {nome, email, senha, usuario, estado, cidade, bairro, numero, rua, promocoes, cpf} = req.body
    if (nome == "" || email == "" || senha == "" || usuario == "" || estado == "" || cidade == "" || bairro == "" || numero == "" || rua == "" || cpf == "") {
        res.status(400)
        res.json("Você deve preencher todos os campos.")  
    } else {
        var salt = bcrypt.genSaltSync(10)
        var hash = bcrypt.hashSync(senha, salt)
        User.findOne({where: {email: email}}).then((user) => {
            if(user != undefined) {
                res.status(404)
                res.json({erro: "Email já cadastrado no sistema."}) 
            }
        })
        User.findOne({where: {usuario: usuario}}).then((user) => {
            if(user != undefined) {
                res.status(404)
                res.json({erro: "Usuário já cadastrado no sistema."})  
            }
        })
        User.findOne({where: {cpf: cpf}}).then((user) => {
            if(user != undefined) {
                res.status(404)
                res.json({erro: "CPF já cadastrado no sistema"})
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
    var {usuario, senha} = req.body
    if (usuario == "" || senha == "") {
        res.status(400)
        res.json({erro: "Você deve preencher a senha e o usuário."})
    } else {
        User.findOne({where: {usuario: usuario}}).then((user) => {
            if (user == undefined) {
                res.status(401)
                res.json({erro: "Usuário ou senha incorreto."})
            } else {
                var correct = bcrypt.compareSync(senha, user.senha)
                if (correct) {
                    jwt.sign({usuario: usuario}, segredo, {expiresIn: '48h'}, (erro, token) => {
                        if(erro) {
                            res.status(400)
                            res.json({erro: "Falha interna."})
                        } else {
                            res.status(200)
                            res.json({token: token})
                        }
                    })
                } else {
                    res.status(401)
                    res.json({erro: "Usuário ou senha incorreto."})
                }
            }
        })
    }
})

router.post("/autorizacao", (req, res) => {
    var {token} = req.body
    if (token == "") {
        res.status(400)
        res.json({erro: "Token inválido."})
    } else {
        jwt.verify(token, segredo, (erro, dados) => {
            if(erro) {
                res.status(401)
                res.json({erro: "Token inválido."})
            } else {
                res.status(200)
                res.json(token)
            }                
        })
    }
})

module.exports = router