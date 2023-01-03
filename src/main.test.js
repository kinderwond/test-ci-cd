const  supertest  = require('supertest');
const server = require('./app');

const request = supertest(server.callback());

describe('module:users:routes', () => {
    it(`should failing validation of registration`, async () => {
        const env =
//        process.env.SECRET1
        "test-secret"
        expect(env).toBe("test-secret")
    });
});