import attempt from '../../attempt.js'

export default function subscriber (emitter, type, hooks = []) {
  return async ({ context, next, request, response }) => {
    const closer = () => emitter.off('context', listener)
    let id = 1

    function listener (context) {
      if (!context) {
        return
      }

      const route = attempt([
        () => ({
          ...context,
          sse: {
            type,
            id
          }
        }),
        ...hooks
      ])

      id += 1

      return route(request, response, next)
    }

    response.setHeader('cache-control', 'no-cache')
    response.setHeader('connection', 'keep-alive')
    response.setHeader('content-type', 'text/event-stream')
    response.once('close', closer)

    emitter.on('context', listener)
    emitter.once('close', context => {
      closer()

      listener(context)
        .then(() => response.end())
        .catch(next)
    })

    return context
  }
}
