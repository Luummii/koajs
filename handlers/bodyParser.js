import bodyParser from 'koa-bodyparser'

export default (app) => { app.use(bodyParser({
  jsonLimit: '56kb'
})) }