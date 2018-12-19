const express = require('express')
const https = require('https')
const fs = require('fs')

const app = express()
app.use(express.static('public'))

const cert = {
  key: fs.readFileSync('server.key'),
  cert: fs.readFileSync('server.cert')
}

https.createServer(cert, app).listen(3000, () => console.log('Listening on port 3000'))