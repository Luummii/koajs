const koa = require('koa')
const koaBody = require('koa-body')
const app = new koa()

app.use(koaBody({
  jsonLimit: '1kb'
}))

app.use(async (ctx) => {
  const body = ctx.request.body
  if (!body.name) ctx.throw(400, 'Не чего нету')
  ctx.body = { name: body.name.toUpperCase() }
})

if (!module.parent) app.listen(5000)