const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()

const setHead = require('./config/setHead')
const router = require('./router/index')

app.use(setHead)
app.use(express.static('Personal-website'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, '../dist'),{
    maxAge: '1y',
    expires: '1y',
    Etag: false,
    lastModified: false,
    index: 'index.html'
}))

app.use('/', router)
var server = app.listen(12345, function () {
  
    var host = server.address().address
    var port = server.address().port
   
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
   
})