const expect = require('chai').expect;
const Feedback =  require('../models/feedback');
const validData = require('./mock/validData');
const invalidData = require('./mock/invalidData');

describe('Testing feedback model', () => {
    it('should have no errors on valid object', (done) => {
        const f = new Feedback(validData);

        f.validate((err) => {
            expect(err).to.be.equal(null);
            done();
        });
    });

    it('should have errors on lack of required properties', (done) => {
        const f = new Feedback(invalidData);

        f.validate((err) => {
            expect(err).to.not.be.equal(null);
            expect(err.errors.rating).to.exist;
            expect(err.errors.title).to.exist;
            done();
        });
    });
});
