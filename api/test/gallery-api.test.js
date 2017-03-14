process.env.MONGODB_URI = 'mongodb://localhost:27017/gallery-test';
const chai = require('chai');
const assert = chai.assert;
const chaiHttp = require('chai-http');
const mongoose = require('mongoose');

const app = require('../lib/app');
chai.use(chaiHttp);
const request = chai.request(app);

before(() => mongoose.connection.dropDatabase());


describe('Full Stack Backend', () => {
    it('Get should be empty array ', () => {
        return request.get('/images')
            .then(req => req.body)
            .then(images => assert.deepEqual(images, []));
    });

}); //end describe