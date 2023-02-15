const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const DB = require("./DB")


app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get("/produtos", (req, res) => {
    res.statusCode = 200
    res.json(DB.produtos)
})

app.get("/comentarios", (req, res) => {
    res.statusCode = 200
    res.json(DB.comentarios)
})

app.get("/produto/:id", (req, res) => {
    if(isNaN(req.params.id)) {
        res.sendStatus(400)
    } else {
        var id = parseInt(req.params.id)
        var produto = DB.produtos.find(p => p.id == id)
        if(produto != undefined) {
            res.statusCode = 200
            res.json(produto)
        } else {
            res.sendStatus(404)
        }
    }
})

app.post("/comentario", (req, res) => {
    var { autor, nota, produtoId, comentario, data } = req.body
    if (autor === "" || nota === "" || produtoId === "" || comentario === "" || data === "") {
        res.sendStatus(400)        
    } else {
        DB.produtos.push({
            "produtoId": produtoId,
            "nota": nota,
            "autor": autor,
            "comentario": comentario,
            "data": data,
            "id": DB.comentarios.length - 1
        })
        res.sendStatus(200) 
    }
})

app.listen(3001, () => {
    console.log("API rodando!")
})