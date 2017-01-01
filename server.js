var express = require('express')
var app = express()

var React = require('react/react')
var ReactDOMServer = require('react-dom/server')
var MessageList = require('./components/messagelist.js')
var Scheduler = require('./services/scheduler')
var ShopGun = require('./services/shopgun')

console.log("starting")

app.get('/', function (req, res) {
  res.send(createIndexPage())
})

app.listen(process.env.PORT || 3000, function () {
  console.log('version 3 listening on port 3000!')
})

Scheduler.setSchedule("every 5 hours", function () {
  console.log('running schedule')
})


function createIndexPage() {
  var rootElement = React.createElement("html", null,
    React.createElement("body", null, "hello from react"),
    React.createElement(MessageList, null));


  return ReactDOMServer.renderToStaticMarkup(rootElement);

}

ShopGun.getAll()
