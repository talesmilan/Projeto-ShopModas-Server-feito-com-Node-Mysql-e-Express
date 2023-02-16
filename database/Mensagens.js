const Sequelize = require('sequelize')
const connection = require('./database')

const Mensagem = connection.define('mensagens', {
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false

    },
    motivo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    mensagem: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    promocoes: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
})

module.exports = Mensagem