const koa = require('koa')
const compose = require('koa-compose')
const app = new koa()

async function name_1 (ctx, next) {
  await next()
  console.log('mes 1')
}

async function name_2 (ctx, next) {
  await next()
  console.log('mes 2')
}

async function name_3 (ctx, next) {
  await next()
  console.log('mes 3')
}

const all = compose([
  name_1, name_2, name_3
])

app.use(all)

if (!module.parent) app.listen(5000)