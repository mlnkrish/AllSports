var express = require('express')

function errorHandler(err, req, res, next) {
    console.log("---ERROR---")
    console.log(err.stack)
    console.log("***ERROR***")
    res.send(500, { error: 'burn!' })
}

var app = express()

app.use(errorHandler)

app.listen(8000)

console.log("Running at 8000")