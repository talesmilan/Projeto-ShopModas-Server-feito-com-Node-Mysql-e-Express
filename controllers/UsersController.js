const express = require('express')
const router = express.Router()
const User = require('../database/Users')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const segredo = require('../JWTsecret')
const validator = require('validator')
const ValidaCPF = require('../ValidaCPF')

router.post("/cadastro", async (req, res) => {
    var {nome, email, senha, password, usuario, estado, cidade, bairro, numero, rua, promocoes, cpf} = req.body
    if (nome === "" || email === "" || senha === "" || usuario === "" || estado === "" || cidade === "" || bairro === "" || numero === "" || rua === "" || cpf === "" || password === "") {
        res.status(400)
        res.json({erro: "Você deve preencher todos os campos."})  
    } else {
        var salt = bcrypt.genSaltSync(10)
        var hash = bcrypt.hashSync(senha, salt)
        var erro = ""
        if (nome.length !== 0 && (nome.length < 5 || nome.length > 40)) {
            erro = "O nome deve ter entre 5 a 40 caracteres."
        }
        const emailIsValid = validator.isEmail(email)
        if (!emailIsValid) {
            erro = "O email não é válido."
        }
        const cpfIsValid = new ValidaCPF(cpf)
        if (cpf.length !== 0 && !cpfIsValid.valida()) {
            erro = 'CPF inválido.'
        }
        if (usuario.length !== 0 && (usuario.length < 5 || usuario.length > 20)) {
            erro = 'O usuário deve ter entre 5 a 20 caracteres.'
        }
        if (senha.length !== 0 && (senha.length < 6 || senha.length > 10)) {
            erro = 'A senha deve ter entre 6 a 10 digitos.'
        }
        if (senha.length !== 0 && senha !== password) {
            erro = 'Você deve digitar a senha que você quer criar duas vezes corretamente.'
        }
        try {
            var emailExiste = await User.findOne({where: {email: email}})
            if(emailExiste != undefined) {
                erro = "O email já está cadastrado no sistema."
            }
            var usuarioExiste = await User.findOne({where: {usuario: usuario}})
            if(usuarioExiste != undefined) {
                erro = "Esse usuário já existe no sistema, tente outro."  
            }
            var cpfExiste = await User.findOne({where: {cpf: cpf}})
            if(cpfExiste != undefined) {
                erro = "Este CPF já está cadastrado no sistema"
            }
        } catch(err) {
            erro = err
        }
        if (erro !== "") {
            res.status(404)
            res.json({erro: erro}) 
        } else {
            try{
                await User.create({
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
                })
                res.statusCode = 200
                res.json({message: "O cadastro foi realizado com sucesso."}) 
            } catch(err) {
                res.status(406)
                res.json({erro: err})
            }
        }
    }  
})

router.post("/login", (req, res) => {
    var {usuario, senha} = req.body
    if (usuario === "" || senha === "" || usuario === undefined || senha === undefined) {
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

router.get("/autorizacao", (req, res) => {
    const authToken = req.headers["authorization"]
    if (authToken === undefined) {
        res.status(400)
        res.json({erro: "Token inválido."})
    }
    const bearer = authToken.split(" ")
    var token = bearer[1]
    if (token === "") {
        res.status(400)
        res.json({erro: "Token inválido."})
    } else {
        jwt.verify(token, segredo, (erro, dados) => {
            if(erro) {
                res.status(401)
                res.json({erro: "Token inválido."})
            } else {
                res.status(200)
                res.json(dados)
            }                
        })
    }
})

module.exports = router