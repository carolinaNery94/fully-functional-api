const express = require('express');
const app = express();
const api = require('./api');
const morgan = require('morgan'); //logger
const bodyParser = require('body-parser');
const cors = require('cors');

app.set('port', (process.env.PORT || 8081));

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use(cors())

app.use('/api', api)
app.use(express.static('static'))

app.use(morgan('dev'))

app.use(function (req, res) {
    const err = new Error('Not Found')
    err.status = 404
    res.json(err)
})

//Add MongoDB connection in later..
app.listen(app.get('port'), function () {
    console.log('API server listening on port ' + app.get('port') + '!')
})
