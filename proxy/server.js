var proxy = require('express-http-proxy')
var cors = require('cors')
var express = require('express')
var app = express()

var path = require('path')
//Serving as static file
var staticFilesPath = path.resolve(__dirname, '..', 'build')
//Enable CORS
app.use(cors())

app.use(express.static(staticFilesPath))
//Serving at /api from source https://www.tabtu.top/
app.use('/api', proxy('https://www.tabtu.top/'))
//Proxy listening on port 3001
app.listen(3001, () => console.log('Server Started'))
