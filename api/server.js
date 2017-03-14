const express = require('express');
const app = express();
const morgan = require('morgan');
const PORT = 3000;
//const DB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/gallery';
//const connection = require('./lib/connection');

const cors = require('cors')();

app.use(morgan('combined'));
app.use(cors);


app.get('/', function (req, res) {
    res.send('server is listening');
});

app.listen(PORT);

