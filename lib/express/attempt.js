import array from '../types/array/array.js'

function validateFunction (fn) {
  if (typeof fn !== 'function') {
    throw new Error('must be a function')
  }
}

export default function attempt (hooks = []) {
  const steps = array.parse(hooks)
  const { length } = steps

  steps.forEach(validateFunction)

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
