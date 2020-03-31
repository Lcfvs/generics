import entities from '../../../../entities/entities.js'
import parsers from '../../../../../../lib/validation/parsers/parsers.js'

const { events: { createdDate } } = entities

export default [
  parsers.w3c.datetime.type(createdDate),
  parsers.w3c.datetime.min(createdDate),
  parsers.w3c.datetime.step(createdDate)
]
