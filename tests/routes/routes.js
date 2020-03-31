import attempt from '../../lib/express/attempt.js'
import hooks from '../lib/hooks/hooks.js'

export default {
  events: {
    archive: attempt(hooks.entities.events.archive),
    create: attempt(hooks.entities.events.create),
    delete: attempt(hooks.entities.events.delete),
    find: attempt(hooks.entities.events.find),
    update: attempt(hooks.entities.events.update),
    search: attempt(hooks.entities.events.search)
  }
}
