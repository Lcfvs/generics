import process from 'process'
import logger from './logger.js'

const { env: { NODE_ENV = 'development' } = {} } = process

export default function debug ({
  format = context => context,
  handler = console,
  method = 'log'
} = {}) {
  const log = logger({ format, handler, method })

  return async value => {
    if (NODE_ENV === 'development') {
      await log(value)
    }

    return value
  }
}
