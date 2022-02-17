const express = require('express')
const consign = require('consign')


// essa função configura o app e devolve o app
module.exports = () => {
    const app = express()

    consign()
        .include('controllers')
        .into(app)

    return(app)
}
