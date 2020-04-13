function header ([name, value]) {
  this.setHeader(name, value)
}

export default function renderer (template = null) {
  return async ({ context, response }) => {
    const { body, headers, meta } = context

    Object.entries(headers)
      .forEach(header, response)

    if (template !== null) {
      response.render(template, { body, meta })
    } else {
      response.send(body)
    }

    return context
  }
}
