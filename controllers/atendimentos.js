

module.exports = app => {
    app.get('/atendimentos', (req, res) => res.send('Você está na rota de atendimentos e está realizando GET'))

    app.post('/atendimentos', (req, res) => {
        console.log(req.body)
        res.send('Você está de rota de atendimento e está realizando um POST')
    })
}