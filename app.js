const Koa = require('koa');
const app = new Koa();

app.use(async ctx => {
    ctx.body = 'Hello ci cd test!';
});

app.listen(3000);