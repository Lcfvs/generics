import routes from './routes/routes.js'
import next from './utils/next.js'

function fill (request) {
  return {
    body: {},
    headers: {},
    params: {},
    query: {},
    ...request
  }
}

export default {
  events: {
    async archive (request) {
      return (await routes.events.archive(fill(request), {}, next))
        .context.entity
    },
    async create (request) {
      return (await routes.events.create(fill(request), {}, next))
        .context.entity
    },
    async delete (request) {
      return (await routes.events.delete(fill(request), {}, next))
        .context.entity
    },
    async find (request) {
      return (await routes.events.find(fill(request), {}, next))
        .context.entity
    },
    async update (request) {
      return (await routes.events.update(fill(request), {}, next))
        .context.entity
    },
    async search (request) {
      return (await routes.events.search(fill(request), {}, next))
        .context.entities
    }
  }
}
