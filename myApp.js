let express = require('express');
let app = express();

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

console.log("Hello World")

































 module.exports = app;
