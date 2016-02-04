import express from 'express'
import http from 'http'

const app = express()

app.use(express.static('public'))

app.set('view engine', 'ejs')

app.get('*', (req, res) => {
    res.render('index')
})

const server = http.createServer(app)

let port = 3003
server.listen(port)
server.on('listening', () => {
    console.log(`Listening on port ${port}`)
})