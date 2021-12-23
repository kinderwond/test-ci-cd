const  supertest  = require('supertest');
const server = require('./app');

const request = supertest(server.callback());

describe('module:users:routes', () => {
    it(`should failing validation of registration`, async () => {
        expect(process.env.SECRET1).toBe("test-secret")
    });
});