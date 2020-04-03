import parsers from '../../../../lib/validation/parsers/parsers.js'
import entities from '../../entities/entities.js'

const {
  events: {
    content,
    createdDate,
    endDate,
    id,
    startDate,
    updatedDate
  }
} = entities

export default {
  content: [
    ...parsers.w3c.string.all(content)
  ],
  createdDate: [
    ...parsers.w3c.datetime.all(createdDate)
  ],
  endDate: [
    ...parsers.w3c.datetime.all(endDate)
  ],
  id: [
    ...parsers.w3c.number.all(id)
  ],
  startDate: [
    ...parsers.w3c.datetime.all(startDate)
  ],
  updatedDate: [
    ...parsers.w3c.datetime.all(updatedDate)
  ]
}
