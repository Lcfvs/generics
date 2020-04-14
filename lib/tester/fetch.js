import app from './app.js'

export default async function fetch (url, {
  body = null,
  method = 'get',
  headers = {},
  query = {},
  stack = false,
  xhr = false
}) {
  const { response } = await app.respond({
    body,
    headers: xhr
      ? {
        ...headers,
        'x-requested-with': 'XMLHttpRequest'
      }
      : headers,
    method,
    query,
    stack,
    url,
    xhr
  })

  return response
}
