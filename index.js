const express = require('express')
const cors = require('cors')
const app = express()
const bodyParser = require('body-parser')
const connection = require('./database/database')
const Produto = require('./database/Produtos')
const Comentario = require('./database/Comentarios')
const Mensagem = require('./database/Mensagens')
const User = require('./database/Users')
const produtosController = require('./controllers/ProdutosController')
const comentariosController = require('./controllers/ComentariosController')
const mensagensController = require('./controllers/MensagensController')
const usersController = require('./controllers/UsersController')
const path = require('path')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(express.static('public'))
app.use(cors({ 
    origin: 'http://localhost:3000' 
  }));

app.use("/", produtosController)  
app.use("/", comentariosController)
app.use("/", mensagensController)
app.use("/", usersController)

// Database
connection.authenticate()
    .then(() => {
    console.log("Conexão feita com sucesso!")
    })
    .catch((e) => console.log(e))

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
    });

app.listen(5000, () => {
    console.log("API rodando!")
})