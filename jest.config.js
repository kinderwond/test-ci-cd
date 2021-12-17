const path = require("path")
const {config} = require("dotenv")
config({path: './.env.testing'});

module.exports = {
    testEnvironment: 'node',
    setupFilesAfterEnv: ['./src/setup-files-after-env.jest.js']
}