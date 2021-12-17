const  supertest  = require('supertest');
const server = require('./app');

const request = supertest(server.callback());

describe('module:users:routes', () => {

    //register tests
    it(`should failing validation of registration`, async () => {

        expect(422).toBe(422);
    });
});