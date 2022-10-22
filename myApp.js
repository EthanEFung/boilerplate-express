let express = require('express');
let app = express();

const logger = (req, res, next) => {
    console.log(req.method, req.path, "-", req.ip);
    next()
}

const timed = (req, res, next) => {
    req.time = new Date().toString()
    next()
}

app.use(logger)

app.use('/public', express.static(__dirname + '/public'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

app.get('/json', (req, res) => {
    if (process.env.MESSAGE_STYLE === 'uppercase') {
        res.send({ "message": "HELLO JSON" })
        return
    }
    res.send({ "message": "Hello json" })
    
})

app.get('/now', timed, (req, res) => {
    res.send({ time: req.time })
})

app.get('/:word/echo', (req, res) => {
    res.send({ echo: req.params.word })
})

app.get("/name", (req, res) => {
    res.send({ name: req.query.first + " " + req.query.last })
})

console.log("Hello World")

































 module.exports = app;
