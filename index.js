const koa = require ('koa') ;
const static = require ('koa-static');
const path = require ('path');

const app = new koa ();

app.use(async(ctx, next) => {
    if (ctx.request.path === '/notes') {
        ctx.request.path = '/notes/'
    }
    ctx.request.path = ctx.request.path.replace('/notes/', '/');
    await next();
});

app.use(static(path.join(__dirname, './dist')));

app.listen
app.listen(8086, "0.0.0.0", () => {
    console.log ('server is running at http://localhost:8086/notes');
});