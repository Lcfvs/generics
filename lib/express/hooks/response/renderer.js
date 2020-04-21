function isEvent (response) {
  return response.getHeader('content-type') === 'text/event-stream'
}

function header ([name, value]) {
  this.setHeader(name, value)
}

export default function renderer (template = null) {
  return async ({ context, next, response }) => {
    const { body = null, headers = {}, meta = {}, sse: { id, type } = {} } = context

    if (!isEvent(response)) {
      Object.entries(headers)
        .forEach(header, response)

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

    return context
  }
}
