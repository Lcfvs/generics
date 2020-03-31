import next from './next.js'

export default function trigger (route, request = {}) {
  return route({
    body: {},
    headers: {},
    params: {},
    query: {},
    ...request
  }, {}, next)
}
