import entities from '../../../../entities/entities.js'
import parsers from '../../../../../../lib/validation/parsers/parsers.js'

const { events: { startDate } } = entities

export default [
  parsers.w3c.datetime.type(startDate),
  parsers.w3c.datetime.min(startDate),
  parsers.w3c.datetime.step(startDate)
]
