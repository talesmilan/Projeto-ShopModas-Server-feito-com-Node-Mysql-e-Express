const Sequelize = require('sequelize')

const connection = require('./database')

const Produto = connection.define('produtos', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    imagem: {
        type: Sequelize.STRING,
        allowNull: false

    },
    tipo: {
        type: Sequelize.STRING,
        allowNull: false

    },
    destaque: {
        type: Sequelize.BOOLEAN,
        allowNull: false

    },
    genero: {
        type: Sequelize.STRING,
        allowNull: false

    },
    preco: {
        type: Sequelize.REAL,
        allowNull: false

    },
    descricao: {
        type: Sequelize.TEXT,
        allowNull: false

    }
})


module.exports = Produto