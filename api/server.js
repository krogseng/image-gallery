const express = require('express');
const app = express();
const morgan = require('morgan');
const PORT = 3000;
const DB_URI = 'mongodb://localhost:27017/db';
const cors = require('cors')();

const MongoClient = require('mongodb').MongoClient;

app.use(morgan('combined'));
app.use(cors);

const connection = {
    db: null,
    connect(dbUri) {
        if (this.db) return Promise.reject('Already connected');
        return MongoClient.connect(dbUri)
            .then(db => this.db = db);
    },
    close() {
        if (!this.db) return Promise.resolve();
        return this.db.close()
            .then(result => {
                this.db = null;
                return result;
            });
    }
};

connection.connect(DB_URI)
    .catch(err => console.log('db connection failed', err));

app.get('/', function (req, res) {
    res.send('server is listening');
});

app.listen(PORT);

