const koa = require('koa')
const koaBody = require('koa-body')
const session = require('koa-session')
const router = require('koa-router')()
const CSRF = require('koa-csrf')

const app = new koa()

app.keys = ['session key', 'csrf key']

app.use(session(app))
app.use(koaBody())
app.use(new CSRF())

router.get('/token', token)

app.use(router.routes())

async function token (ctx) {
  ctx.body = ctx.csrf
}

if (!module.parent) app.listen(5000)