import attempt from '../../attempt.js'

const headers = {
  'cache-control': 'no-cache',
  connection: 'keep-alive',
  'content-type': 'text/event-stream'
}

export default function subscriber (emitter, hooks = []) {
  return async ({ context, next, request, response }) => {
    const closer = () => emitter.off('context', listener)

    function listener (context) {
      if (!context) {
        return
      }

      const route = attempt([() => context, ...hooks])

      return route(request, response, next)
    }

    response.writeHead(headers)

    response.once('close', closer)
    request.connection.once('close', closer)

    emitter.on('context', listener)
    emitter.once('close', async context => {
      closer()

      listener(context)
        .then(() => response.end())
        .catch(next)
    })

    return context
  }
}
