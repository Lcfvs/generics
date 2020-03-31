import entities from '../../../../entities/entities.js'
import parsers from '../../../../../../lib/validation/parsers/parsers.js'

const { events: { endDate } } = entities

export default [
  parsers.w3c.datetime.type(endDate),
  parsers.w3c.datetime.min(endDate),
  parsers.w3c.datetime.step(endDate)
]
