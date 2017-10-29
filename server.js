const koa = require('koa')
const auth = require('koa-basic-auth')
const app = new koa()

app.use(async (ctx, next) => {
  try {
    await next()
  } catch (err) {
    if (err.status === 401) {
      ctx.status = 401
      ctx.set('WWW-Authentificate', 'Basic')
      ctx.body = 'Jopa'
    } else {
      throw err
    }
  }
})

app.use(auth({ name: 'test', pass: 'test' }))

app.use(async (ctx) => {
  ctx.body = 'Secret'
})

if (!module.parent) app.listen(5000)