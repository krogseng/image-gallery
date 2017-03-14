const router = require('express').Router();
//const bodyParser = require('body-parser').json();
const Images = require('../models/images-schema');


router
    .get('/', (req, res, next) => {
        Images.find()
            .then(images =>
                res.send(images))
            .catch(next);
    });
module.exports = router;