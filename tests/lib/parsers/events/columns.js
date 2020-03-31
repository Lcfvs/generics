import parsers from '../../../../lib/validation/parsers/parsers.js'
import entities from '../../entities/entities.js'

const { events: {
  content,
  createdDate,
  endDate,
  id,
  startDate,
  updatedDate
} } = entities

export default {
  content: [
    parsers.w3c.string.type(content),
    parsers.w3c.string.maxlength(content),
    parsers.w3c.string.minlength(content),
    parsers.w3c.string.line()
  ],
  createdDate: [
    parsers.w3c.datetime.type(createdDate),
    parsers.w3c.datetime.min(createdDate),
    parsers.w3c.datetime.step(createdDate)
  ],
  endDate: [
    parsers.w3c.datetime.type(endDate),
    parsers.w3c.datetime.min(endDate),
    parsers.w3c.datetime.step(endDate)
  ],
  id: [
    parsers.w3c.number.type(id),
    parsers.w3c.number.min(id),
    parsers.w3c.number.step(id),
    parsers.knex.type(id.context)
  ],
  startDate: [
    parsers.w3c.datetime.type(startDate),
    parsers.w3c.datetime.min(startDate),
    parsers.w3c.datetime.step(startDate)
  ],
  updatedDate: [
    parsers.w3c.datetime.type(updatedDate),
    parsers.w3c.datetime.min(updatedDate),
    parsers.w3c.datetime.step(updatedDate)
  ]
}
