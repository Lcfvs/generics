import hooks from '../../../../lib/express/hooks/hooks.js'
import entities from '../../entities/entities.js'
import parsers from '../../parsers/parsers.js'

const events = parsers.entities.events
const context = entities.events.id.context

export default {
  archive: [
    ...hooks.request.input.all(events.archive),
    hooks.knex.archiveEntity(context)
  ],
  create: [
    ...hooks.request.input.all(events.create),
    hooks.knex.saveEntity(context)
  ],
  find: [
    ...hooks.request.input.all(events.find),
    hooks.knex.getEntity(context)
  ],
  search: [
    ...hooks.request.input.all(events.search),
    hooks.knex.searchEntities(context)
  ],
  update: [
    ...hooks.request.input.all(events.update),
    hooks.knex.saveEntity(context)
  ]
}
