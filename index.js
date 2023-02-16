const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')
const connection = require('./database/database')
const Produto = require('./database/Produtos')
const Comentario = require('./database/Comentarios')
const produtosController = require('./controllers/ProdutosController')
const comentariosController = require('./controllers/ComentariosController')



app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(express.static('public'))
app.use(cors({ 
    origin: 'http://localhost:3000' 
  }));

  app.use("/", produtosController)
  app.use("/", comentariosController)


// Database
connection.authenticate()
    .then(() => {
    console.log("Conexão feita com sucesso!")
    })
    .catch((e) => console.log(e))

app.listen(5000, () => {
    console.log("API rodando!")
})