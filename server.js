const koa = require('koa')
const logger = require('koa-logger')

const app = new koa()

function testFunc (data) {
  return async function (ctx, next) {
    if (/(\.js)$/.test(ctx.path)) {
      console.log('test')
      await next()
    } else {
      await data.call(this, ctx, next)
    }
  }
}

app.use(testFunc(logger()))

app.use(async (ctx) => {
  ctx.body = 'Hello word!'
})

if (!module.parent) app.listen(5000)