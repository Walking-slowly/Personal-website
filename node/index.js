const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const setHead = require('./config/setHead')
const router = require('./router/index')

app.use(setHead)
app.use(express.static('/Personal-website'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


app.use('/', router)

  
  
 var server = app.listen(8081, function () {
  
   var host = server.address().address
   var port = server.address().port
  
   console.log("应用实例，访问地址为 http://%s:%s", host, port)
  
 })