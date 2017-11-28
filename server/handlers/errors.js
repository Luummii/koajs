export default (app) => {
  app.use(async (ctx, next) => {
    try {
      await next()
    } catch (e) {
      console.error(e)
    }
  })
}