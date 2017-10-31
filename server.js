const koa = require('koa')
const app = new koa()

const Napoleon = {
  name: 'Napoleon'
}
const Adolf = {
  name: 'Adolf'
}
const Stalin = {
  name: 'Stalin'
}

const users = {
  Napoleon: Napoleon,
  Adolf: Adolf,
  Stalin: Stalin
}

app.use(async (ctx, next) => {
  await next()

  if (!ctx.body) {
    console.log('ctx.body', ctx.body)
    return
  }

  const type = ctx.accepts('html')

  if (type === false) ctx.throw(406)

  if (type === 'html') {
    ctx.type = 'html'
    ctx.body = ctx.body.name
    return
  }
})

app.use(async (ctx, next) => {
  const name = ctx.path.slice(1)
  const user = users[name]
  console.log('user', user)
  ctx.body = user
})


if (!module.parent) app.listen(5000)