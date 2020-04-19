import app from './app.js'

function header (cond, name, value) {
  return cond
    ? { [name]: value }
    : {}
}

export default async function fetch (url, {
  body = null,
  method = 'get',
  headers = {},
  query = {},
  sse = false,
  stack = false,
  xhr = false
}) {
  const { response } = await app.respond({
    body,
    headers: {
      ...headers,
      ...header(xhr, 'x-requested-with', 'XMLHttpRequest'),
      ...header(sse, 'accept', 'text/event-stream')
    },
    method,
    query,
    stack,
    url,
    xhr
  })

  return response
}
