const koa = require('koa')

const app = new koa()

app.use(async (ctx) => {
  const n = ~~ctx.cookies.get('view') + 1
  ctx.cookies.set('view', n)
  ctx.body = 'view = ' + n
})

if (!module.parent) app.listen(5000)