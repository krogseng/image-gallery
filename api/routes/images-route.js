const router = require('express').Router();
const bodyParser = require('body-parser').json();
const Images = require('../models/images-schema');


router
    .post('/', bodyParser, (req, res, next) => {
        new Images(req.body)
            .save()
            .then(image => {
                res.send(image);
            })
            .catch(next);
    })
    .get('/', (req, res, next) => {
        Images.find()
            .then(images =>
                res.send(images))
            .catch(next);
    });
module.exports = router;
