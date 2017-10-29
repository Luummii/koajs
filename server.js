const koa = require('koa')
const app = new koa()

app.use(async (ctx, next) => {
  const start = Date.now()
  await next()
  const ms = Date.now() - start
  console.log('ms 1 = ', ms)
})

app.use(async (ctx, next) => {
  const start = Date.now()
  await next()
  const ms = Date.now() - start
  console.log('ms 2 = ', ms)
})

app.use(async (ctx) => {
  ctx.body = 'Hello Word!'
})

if (!module.parent) app.listen(5000)