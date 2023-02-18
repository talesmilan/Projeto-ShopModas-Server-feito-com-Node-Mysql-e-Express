const Sequelize = require('sequelize')
const connection = require('./database')

const Pedido = connection.define('pedidos', {
    usuario: {
        type: Sequelize.STRING,
        allowNull: false
    },
    precoTotal: {
        type: Sequelize.REAL,
        allowNull: false

    },
    quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

module.exports = Pedido