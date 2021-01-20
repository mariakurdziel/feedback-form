const expect = require('chai').expect;
const request = require('request');
const validData = require('./mock/validData');
const invalidData = require('./mock/invalidData');

describe('Testing feedback API', () => {
    describe('GET request:', () => {
        it('Should return proper type and status 200', (done) => {
            request('http://localhost:3000/feedbacks', (err, res) => {
                expect(res.statusCode).to.equal(200);
                expect(res).to.have.property('body');
                expect(JSON.parse(res.body)).to.be.an('array');
                done();
            });
        });
        it('Should return status 404', (done) => {
            request('http://localhost:3000/feed', (err, res) => {
                expect(res.statusCode).to.equal(404);
                done();
            });
        });
    });

    describe('POST request:', () => {
        it('Should return JSON object with id on valid data', (done) => {
            request('http://localhost:3000/feedbacks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(validData)
            }, (err, res) => {
                expect(res.statusCode).to.equal(200);
                expect(JSON.parse(res.body)).to.have.property('_id');
                done();
            });
        });

        it('Should return JSON object with errors on invalid data', (done) => {
            request('http://localhost:3000/feedbacks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(invalidData)
            }, (err, res) => {
                expect(res.statusCode).to.equal(200);
                expect(JSON.parse(res.body)).to.have.property('err_message');
                done();
            });
        });

    });
});
