import parsers from '../../../../lib/validation/parsers/parsers.js'
import columns from './columns.js'

export default {
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
  create: {
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
  delete: {
    params: {
      id: [
        parsers.misc.required(),
        ...columns.id
      ]
    }
  },
  find: {
    params: {
      id: [
        parsers.misc.required(),
        ...columns.id
      ]
    }
  },
  search: {
    query: {}
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
  }
}
