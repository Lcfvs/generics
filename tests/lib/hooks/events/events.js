import hooks from '../../../../lib/express/hooks/hooks.js'
import entities from '../../entities/entities.js'
import parsers from '../../parsers/parsers.js'

const events = parsers.entities.events
const context = entities.events.id.context

export default {
  archive: [
    ...hooks.request.input.all(events.archive),
    hooks.knex.archiveEntity(context),
    hooks.log.logger()
  ],
  get: [
    ...hooks.request.input.all(events.get),
    hooks.knex.isEntity(context),
    hooks.log.logger()
  ],
  post: [
    ...hooks.request.input.all(events.post),
    hooks.knex.saveEntity(context),
    hooks.log.logger()
  ],
  update: [
    ...hooks.request.input.all(events.update),
    hooks.knex.saveEntity(context),
    hooks.log.logger()
  ]
}
