const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')
const connection = require('./database/database')

const Produto = require('./database/Produtos')
const Comentario = require('./database/Comentarios')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(express.static('public'))

app.use(cors({ 
    origin: 'http://localhost:3000' 
  }));

// Database
connection.authenticate()
    .then(() => {
    console.log("Conexão feita com sucesso!")
    })
    .catch((e) => console.log(e))

app.get("/produtos", (req, res) => {
    Produto.findAll().then((produtos) => {
        res.statusCode = 200
        res.json(produtos)
    }).catch(e => {
        res.sendStatus(404)
    })
})

app.get("/comentarios", (req, res) => {
    Comentario.findAll().then((comentarios) => {
        res.statusCode = 200
        res.json(comentarios)
    }).catch(e => {
        res.sendStatus(404)
    })
})

app.get("/produto/:id", (req, res) => {
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

app.post("/comentarios", (req, res) => {
    var { autor, nota, produtoId, comentario } = req.body
    if (autor === "" || nota === "" || produtoId === "" || comentario === "") {
        res.sendStatus(400)        
    } else {
        console.log(req.body)
        Comentario.create({
            autor: autor,
            nota: parseInt(nota),
            comentario: comentario,
            produtoId: parseInt(produtoId)
        }).then((produto) => {
            res.statusCode = 200
            res.json(produto)
        }).catch(e => {
            res.sendStatus(404)
        })
    }
})

app.listen(5000, () => {
    console.log("API rodando!")
})