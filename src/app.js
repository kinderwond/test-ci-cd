const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
    console.log("LOG REQUEST")
    ctx.body = 'CI CD TESTED SUCCESS v1?';
});

module.exports = app