var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.sendFile(__dirname+"/index.html")
})

app.listen(process.env.PORT || 3000, function () {
  console.log('version 3 listening on port 3000!')
  console.log("environment="+JSON.stringify(process.env))
})

