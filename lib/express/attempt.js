import array from '../types/array/array.js'
import validateFunction from './utils/validateFunction.js'

function isClosed (response) {
  return response.getHeader('content-type') !== 'text/event-stream' &&
   response.headersSent
}

export default function attempt (hooks = []) {
  const steps = array.parse(hooks)
  const { length } = steps

  steps.forEach(validateFunction)

  return async (request, response, next) => {
    try {
      let context = {}

      for (let i = 0; i < length && !isClosed(response); i += 1) {
        context = await steps[i]({ context, next, request, response })
      }

      return {
        context,
        next,
        request,
        response
      }
    } catch (error) {
      next(error)
    }
  }
}
