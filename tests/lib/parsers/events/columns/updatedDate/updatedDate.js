import entities from '../../../../entities/entities.js'
import parsers from '../../../../../../lib/validation/parsers/parsers.js'

const { events: { updatedDate } } = entities

export default [
  parsers.w3c.datetime.type(updatedDate),
  parsers.w3c.datetime.min(updatedDate),
  parsers.w3c.datetime.step(updatedDate)
]
