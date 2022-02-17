const express = require('express')
const consign = require('consign')
const bodyParser = require('body-parser')

// essa função configura o app e devolve o app
module.exports = () => {
    const app = express()

    app.use(bodyParser.urlencoded({extended : true}))
    app.use(bodyParser.json())
    consign()
        .include('controllers')
        .into(app)

    return(app)
}
