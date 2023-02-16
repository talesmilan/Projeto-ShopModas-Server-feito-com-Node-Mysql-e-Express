const Sequelize = require('sequelize')

const connection = require('./database')

const Produto = require('./Produtos')

const Comentario = connection.define('comentarios', {
    autor: {
        type: Sequelize.STRING,
        allowNull: false
    },
    nota: {
        type: Sequelize.INTEGER,
        allowNull: false

    },
    comentario: {
        type: Sequelize.TEXT,
        allowNull: false

    }
})

Comentario.belongsTo(Produto)

module.exports = Comentario