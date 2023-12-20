const express = require('express')
const QRCode = require('qrcode')

const app = express()

app.set('view engine', 'hbs')
var path = require('path')
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', function(req, res) {
    res.render("index.hbs")
})

app.get('/generate', function(req, res) {
    const link = req.query.link

    QRCode.toBuffer(link, function(err, url) {
        res.render("index.hbs", {qrcode: url.toString("base64")})
    })
})

app.listen("3001")