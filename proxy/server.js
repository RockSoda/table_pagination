var proxy = require('express-http-proxy')
var cors = require('cors')
var express = require('express')
var app = express()

var path = require('path')

var staticFilesPath = path.resolve(__dirname, '..', 'build')

app.use(cors())

app.use(express.static(staticFilesPath))

app.use('/api', proxy('https://www.tabtu.top/'))

app.listen(3001, () => console.log('Server Started'))