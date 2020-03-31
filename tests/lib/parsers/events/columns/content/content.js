import entities from '../../../../entities/entities.js'
import parsers from '../../../../../../lib/validation/parsers/parsers.js'

const { events: { content } } = entities

export default [
  parsers.w3c.string.type(content),
  parsers.w3c.string.maxlength(content),
  parsers.w3c.string.minlength(content),
  parsers.w3c.string.line()
]
