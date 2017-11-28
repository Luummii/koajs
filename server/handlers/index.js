import bodyParser from './bodyParser'
import errors from './errors'
import favicon from './favicon'
import logger from './logger'
import session from './session'
import statics from './static'

export default [
  favicon,
  logger,
  errors,
  bodyParser,
  session,
  statics
]