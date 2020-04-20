import attempt from '../../attempt.js'

const headers = {
  'cache-control': 'no-cache',
  connection: 'keep-alive',
  'content-type': 'text/event-stream'
}

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

    response.writeHead(headers)

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
