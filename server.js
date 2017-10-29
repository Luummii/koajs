const koa = require('koa')
const app = new koa()

app.use(async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    ctx.status = err.status || 500
    ctx.type = 'html'
    ctx.body = '<p>Jopa</p>'
    ctx.app.emit('error', err, ctx)
  }
})

app.use(async () => {
  throw new Error('booooooom')
})

app.on('error', (err) => {
  console.log('err message = ', err.message)
  console.log('err = ', err)
})

if (!module.parent) app.listen(5000)