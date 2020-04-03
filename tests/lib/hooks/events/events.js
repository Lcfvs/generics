import hooks from '../../../../lib/express/hooks/hooks.js'
import entities from '../../entities/entities.js'
import parsers from '../../parsers/parsers.js'
import renderer from '../renderer.js'

const events = parsers.entities.events
const context = entities.events.id.context

export default {
  archive: [
    ...hooks.request.input.all(events.archive),
    hooks.knex.archiveEntity(context),
    renderer(({ entity }) => entity)
  ],
  create: [
    ...hooks.request.input.all(events.create),
    hooks.knex.saveEntity(context),
    renderer(({ entity }) => entity)
  ],
  delete: [
    ...hooks.request.input.all(events.delete),
    hooks.knex.deleteEntity(context),
    renderer(({ entity }) => entity)
  ],
  find: [
    ...hooks.request.input.all(events.find),
    hooks.knex.getEntity(context),
    renderer(({ entity }) => entity)
  ],
  search: [
    ...hooks.request.input.all(events.search),
    hooks.knex.searchEntities(context),
    renderer(({ entities }) => entities)
  ],
  update: [
    ...hooks.request.input.all(events.update),
    hooks.knex.saveEntity(context),
    renderer(({ entity }) => entity)
  ]
}
