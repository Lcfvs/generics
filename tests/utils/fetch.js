import app from './app.js'

export default async function fetch (url, {
  body = null,
  method = 'get',
  headers = {},
  query = {}
}) {
  const { response } = await app.respond({ body, headers, method, query, url })

  return response
}
