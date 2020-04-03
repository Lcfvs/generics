import context from '../../knex/context.js'
import hooks from '../../../../lib/express/hooks/hooks.js'
import parsers from '../../parsers/parsers.js'
import renderer from '../renderer.js'

const entity = context.entities.events()
const events = parsers.entities.events

export default {
  archive: [
    ...hooks.request.input.all(events.archive),
    hooks.knex.archiveEntity(entity),
    renderer(({ entity }) => entity)
  ],
  create: [
    ...hooks.request.input.all(events.create),
    hooks.knex.createEntity(entity),
    renderer(({ entity }) => entity)
  ],
  delete: [
    ...hooks.request.input.all(events.delete),
    hooks.knex.deleteEntity(entity),
    renderer(({ entity }) => entity)
  ],
  find: [
    ...hooks.request.input.all(events.find),
    hooks.knex.findEntity(entity),
    renderer(({ entity }) => entity)
  ],
  search: [
    ...hooks.request.input.all(events.search),
    hooks.knex.searchEntities(entity),
    renderer(({ entities }) => entities)
  ],
  update: [
    ...hooks.request.input.all(events.update),
    hooks.knex.updateEntity(entity),
    renderer(({ entity }) => entity)
  ]
}
