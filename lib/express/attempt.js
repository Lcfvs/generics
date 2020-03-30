import array from '../types/array/array.js'

function parse (fn) {
  if (typeof fn === 'function') {
    return fn
  }

  throw new Error('must be a function')
}

export default function attempt (hooks = []) {
  const steps = array.parse(hooks).map(parse)
  const { length } = steps

  return async (request, response, next) => {
    try {
      let context = {}

      for (let i = 0; i < length && !response.headersSent; i += 1) {
        context = await steps[i]({ context, next, request, response })
      }
    } catch (error) {
      next(error)
    }
  }
}
