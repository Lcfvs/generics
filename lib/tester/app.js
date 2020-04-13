import process from 'process'

const request = {}
const response = {
  body: null,
  headers: null,
  headersSent: false,
  redirected: false,
  statusCode: 200,
  location (location) {
    return end(this.setHeader('Location', location))
  },
  redirect (statusCode, location) {
    return this
      .status(statusCode)
      .location(location)
  },
  render (template, body) {
    return this
      .setHeader('content-type', 'text/html')
      .setHeader('x-fake-app-template', template)
      .send(body)
  },
  status (statusCode) {
    return Object.assign(this, {
      statusCode
    })
  },
  setHeader (name, value) {
    return Object.assign(this, {
      headers: {
        ...this.headers,
        [name]: value
      }
    })
  },
  send (body) {
    return end(this, {
      body,
      headers: {
        ...this.headers,
        ...this.headers['content-type']
          ? {}
          : {
            'content-type': 'application/json'
          }
      }
    })
  }
}

function end (response, ...rest) {
  return Object.assign(response, ...rest, {
    headersSent: true
  })
}

function next (error = new Error('not found')) {
  console.error(error)
  process.exit(0)
}

function prepare (method, route, listener) {
  return {
    listener,
    method,
    route,
    segments: route.split('/')
  }
}

function parse (routes, method, segments) {
  const match = {}

  routes.every(params, { match, method, segments })

  return match
}

function params (route) {
  const { match, method, segments } = this
  const params = {}
  const matches = method === route.method &&
    segments.length === route.segments.length &&
    route.segments.every(param, { params, segments })

  if (matches) {
    Object.assign(match, {
      params,
      route
    })
  }

  return !matches
}

function param (segment, key) {
  const { params, segments } = this
  const current = segments[key]
  const [flag, ...rest] = segment

  if (flag === ':') {
    params[rest.join('')] = current

    return true
  }

  return current === segment
}

export default {
  routes: [],
  get (route, listener) {
    this.routes.push(prepare('get', route, listener))

    return this
  },
  post (route, listener) {
    this.routes.push(prepare('post', route, listener))

    return this
  },
  async respond ({
    body = null,
    headers,
    method,
    query,
    url
  }) {
    const { route = {}, params } = parse(this.routes, method, url.split('/'))
    const { listener } = route

    if (listener) {
      return listener(...[
        {
          ...request,
          body,
          headers,
          method: route.method,
          params,
          query,
          route: route.route,
          url
        },
        Object.assign(Object.create(response), {
          body,
          headers: {},
          method
        }),
        next
      ])
    }

    next()
  }
}
