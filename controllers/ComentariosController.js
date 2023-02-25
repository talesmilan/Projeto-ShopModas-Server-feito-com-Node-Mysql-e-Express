const express = require('express')
const router = express.Router()
const Comentario = require('../database/Comentarios')

router.get("/comentarios", (req, res) => {
    Comentario.findAll().then((comentarios) => {
        res.statusCode = 200
        res.json(comentarios)
    }).catch(e => {
        res.sendStatus(404)
    })
})

router.get("/comentarios/:produtoId", (req, res) => {
    if(isNaN(req.params.produtoId)) {
        res.sendStatus(400)
    } else {
        var produtoId = req.params.produtoId
        Comentario.findAll({where: {produtoId: produtoId}}).then(comentarios => {
            res.status(200)
            res.json(comentarios)
        }).catch(e => {
            res.sendStatus(404)
        })
    }
})


router.post("/comentarios", (req, res) => {
    var { autor, nota, produtoId, comentario } = req.body
    if (autor === "" || nota === "" || produtoId === "" || comentario === "") {
        res.status(400)
        res.json({erro: "Você deve preencher todos os campos."})        
    } else {
        Comentario.create({
            autor: autor,
            nota: parseInt(nota),
            comentario: comentario,
            produtoId: parseInt(produtoId)
        }).then((produto) => {
            res.statusCode = 200
            res.json(produto)
        }).catch(e => {
            res.status(404)
            res.json({erro: "Não foi possível postar seu comentário devido a um erro interno."})
        })
    }
})

router.delete("/comentario/:id", (req, res) => {
    if(isNaN(req.params.id)) {
        res.sendStatus(400)
    } else {
        var id = parseInt(req.params.id)
        Comentario.destroy({
            where: {
              id: id
            }
          }).then((comentario) => {
            if (comentario == undefined) {
                res.sendStatus(404)
            } else {
                res.sendStatus(200)
            }
          }).catch(() => {
            res.sendStatus(404)
          })
    }
})

router.put("/comentario/:id", (req, res) => {
    if(isNaN(req.params.id)) {
        res.sendStatus(400)
    } else {
        var id = parseInt(req.params.id)  
        var {nota, comentario } = req.body
        Comentario.update({ comentario: comentario, nota: nota }, {
            where: {
              id: id
            }
          }).then(comentario => {
            if(comentario == undefined) {
                res.sendStatus(404)
            } else {
                res.sendStatus(200)
            }
          }).catch(() => {
            res.sendStatus(404)
          })
    } 
})

module.exports = router