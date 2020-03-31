import entities from '../../../../entities/entities.js'
import parsers from '../../../../../../lib/validation/parsers/parsers.js'

const { events: { id } } = entities

export default [
  parsers.w3c.number.type(id),
  parsers.w3c.number.min(id),
  parsers.w3c.number.step(id),
  parsers.knex.type(id.context)
]
