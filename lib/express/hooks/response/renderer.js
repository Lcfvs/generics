function isEvent (response) {
  return response.getHeader('content-type') === 'text/event-stream'
}

export default function renderer (template = null) {
  return async ({ context, next, response }) => {
    const { body = null, headers = {}, meta = {}, sse: { id, type } = {} } = context

    if (!isEvent(response)) {
      response.writeHead(headers)

      if (template === null) {
        response.send(body)
      } else {
        response.render(template, { body, meta })
      }
    } else {
      if (template === null) {
        response.write({ body, id, type })
      } else if (body !== null) {
        const { id = null, type = null } = meta
        const contents = []
        const data = typeof body === 'string'
          ? body
          : JSON.stringify(body)

        if (type !== null) {
          contents.push(`event: ${type}`)
        }

        if (id !== null) {
          contents.push(`id: ${id}`)
        }

        data.split('\n').forEach(line => contents.push(`data: ${line}\n`))
        contents.push('\n')

        response.write(contents.join('\n'))
      }
    }

    if (template !== null) {
      response.render(template, { body, meta }, (error, html) => {
        if (error) {
          return next(error)
        }

        if (type) {

        } else {
          response.send(html)
        }
      })
    } else {
      response.send(body)
    }

    return context
  }
}
