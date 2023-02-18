const segredo = require('../JWTsecret')

function auth(req, res, next) {
    const authToken = req.headers['authorization']

    if(authToken != undefined) {

        const bearer = authToken.split(' ')
        var token = bearer[1]

        jwt.verify(token, segredo, (erro, dados) => {
            if(erro) {
                res.status(401)
                res.json({erro: "Token inválido."})
            } else {
                req.token = token
                req.loggedUser = {usuario: dados.usuario}
                next()
            }
        })

    } else {
        res.status(401)
        res.json({erro: "Token inválido."})
    }
}

module.exports = auth