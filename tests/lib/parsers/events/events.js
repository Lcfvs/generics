import parsers from '../../../../lib/validation/parsers/parsers.js'
import columns from './columns/columns.js'

export default {
  get: {
    params: {
      id: [
        parsers.misc.required(),
        ...columns.id
      ]
    }
  },
  list: {},
  post: {
    body: {
      content: [
        parsers.misc.required(),
        ...columns.content
      ],
      startDate: [
        parsers.misc.required(),
        ...columns.startDate
      ],
      endDate: [
        parsers.misc.required(),
        ...columns.endDate
      ]
    }
  },
  update: {
    body: {
      content: [
        parsers.misc.required(),
        ...columns.content
      ],
      startDate: [
        parsers.misc.required(),
        ...columns.startDate
      ],
      endDate: [
        parsers.misc.required(),
        ...columns.endDate
      ]
    },
    params: {
      id: [
        parsers.misc.required(),
        ...columns.id
      ]
    }
  },
  archive: {
    params: {
      id: [
        parsers.misc.required(),
        ...columns.id
      ]
    },
    query: {
      confirmation: [
        parsers.misc.required(),
        parsers.w3c.boolean.type()
      ]
    }
  },
  delete: {
    params: {
      id: [
        parsers.misc.required(),
        ...columns.id
      ]
    }
  }
}
