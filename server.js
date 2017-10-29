const koa = require('koa')
const app = new koa()

app.use(async (ctx) => {
  ctx.status = 404

  switch (ctx.accepts('html', 'json')) {
    case 'html':
      ctx.type = 'html'
      ctx.body = '<p>Page not found</p>'
      break
    case 'json':      
      ctx.body = {
        message: 'Page not found'
      }
      break
    default:
    ctx.type = 'text'
    ctx.body = 'Page not found'
    
  }
})

if (!module.parent) app.listen(5000)