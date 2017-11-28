import Koa from 'koa'
import KoaRouter from 'koa-router'
import handlers from './handlers'

const app = new Koa()
const router = new KoaRouter()

app.keys = ['secret']
handlers.forEach(handler => handler(app))

let clients = []

router.get('/subscribe', async (ctx, next) => {
  const promise = new Promise((resolve, reject) => {
    clients.push(resolve)
  })
  let message = await promise
  ctx.body = message
})

router.post('/publish', async (ctx, next) => {
  let message = ctx.request.body.message
  clients.forEach(resolve => {
    resolve(String(message))
  })
  clients = []
  ctx.body = 'Ok'
})

app.use(router.routes())

export default app