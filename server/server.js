import app from './app'
import config from 'config'

const PORT = process.env.PORT || config.get('port')

const server = app.listen(PORT, (err) => {
  if (err) console.error(err)
  console.log(`Server running: ${PORT}`)
})

export default server