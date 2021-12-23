const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
    console.log("LOG REQUEST")
    ctx.body = 'Hello ci cd test!';
});

module.exports = app