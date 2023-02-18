const Sequelize = require('sequelize')
const connection = require('./database')
const Pedido = require('./Pedidos')
const Produto = require('./Produtos')

const Item = connection.define('itenspedidos', {
    quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    preco: {
        type: Sequelize.REAL,
        allowNull: false
    }
})

Item.belongsTo(Pedido)

Item.belongsTo(Produto)

module.exports = Item